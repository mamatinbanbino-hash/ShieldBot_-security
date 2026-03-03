export default async function handler(req, res) {
    const { device, menace } = req.body;
    const BOT_TOKEN = "8558629634:AAFofbmQxb_V2zrKQrfs35Gj1RIfMHrGiT8";
    const CHAT_ID = "6224971749";

    const text = `🛡️ **RAPPORT NDIAYE TECHN** 🛡️\n` +
                 `━━━━━━━━━━━━━━━━━━\n` +
                 `📱 **Appareil** : ${device}\n` +
                 `⚠️ **Menace** : ${menace}\n` +
                 `━━━━━━━━━━━━━━━━━━\n` +
                 `✅ *Audit de surface terminé.*`;

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: "Markdown" })
        });
        res.status(200).json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
}
