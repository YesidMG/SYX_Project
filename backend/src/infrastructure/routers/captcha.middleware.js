const fetch = require("node-fetch");

async function captchaMiddleware(req, res, next) {
    const { captcha } = req.body;
    if (!captcha) {
        return res.status(400).json({ error: "Falta el captcha" });
    }
    if (process.env.NODE_ENV === "development") {
        console.log("Captcha bypass en desarrollo");
        return next();
    }
    const secret = "6LfEW6orAAAAAOlTU0HBLaaV_M16s1gDp21oltja";
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", captcha);

    const captchaRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params,
        }
    );
    const captchaData = await captchaRes.json();
    console.log("Captcha response:", captchaData);
    if (captchaData.success !== true) {
        return res.status(400).json({ error: "Captcha inválido" });
    }
    next();
}

module.exports = { captchaMiddleware };