import emailjs from "@emailjs/browser";

export const sendNotificationEmail = async (data: {
    user_name: string;
    message: string;
    discount?: string;
}) => {
    try {
    await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    console.log("Correo enviado correctamente");
    } catch (error) {
    console.error("Error enviando email:", error);
    }
};


sendNotificationEmail({
    user_name: "Juan",
    message: "Nuevo producto disponible",
    discount: "20%"
});
