export class EnrollForm{
    constructor(selector, storageKey, serverUrl){
        this.form = document.querySelector(selector);
        this.msgEl = document.getElementById("enroll-msg");
        this.storageKey = storageKey;
        this.serverUrl = serverUrl;

        if (!this.form) return;

        const submitBtn = document.getElementById("enroll-submit");
        if (submitBtn) {
            submitBtn.addEventListener("click", () => this.form.requestSubmit());
        }

        this.restore();
        this.form.addEventListener("submit", (e) => this.onSubmit(e));
    }

    restore(){
        const data = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        if (data.email) this.form.elements.email.value = data.email;
        if (data.payment) {
            const r = this.form.querySelector(`input[name="payment"][value="${data.payment}"]`);
            if (r) r.checked = true;
        }
    }

    save(data){
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    async onSubmit(e){
        e.preventDefault();
        if (!this.form.reportValidity()) return;
        const data = Object.fromEntries(new FormData(this.form).entries());
        this.save(data);

        try {
            const res = await fetch(this.serverUrl,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    createdAt: new Date().toISOString()
                })
            });
            localStorage.removeItem(this.storageKey);
            this.form.reset();
        } 
        catch {
            localStorage.removeItem(this.storageKey);
            this.form.reset();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new EnrollForm(
        "#enroll-form",
        "enrollUserData_HTML_CSS",
        "http://localhost:3000/users"
    );
});