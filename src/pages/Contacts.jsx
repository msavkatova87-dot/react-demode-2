import React, { useRef, useState } from "react";
import { Button, Input, Textarea, Typography, Card } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_s1mdq0i", "template_r99mdfy", form.current, {
        publicKey: "5gKHVQmFOWc407g97",
      })
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-10 bg-black dark:bg-blue-gray-900 text-white dark:text-white">
      <Card className="w-full max-w-lg bg-gray-900/60 backdrop-blur-md border border-gray-700 p-8 shadow-2xl">
        <Typography variant="h3" className="text-white text-center mb-6 font-semibold">
          {t("Contact")} <span className="text-blue-400">{t("Us")}</span>
        </Typography>

        <Typography className="text-gray-400 text-center mb-8">
          {t("Send us a message and we’ll get back to you soon.")}
        </Typography>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <Input
            required
            name="user_name"
            label="Your Name"
            color="blue"
            className="text-white"
            crossOrigin=""
          />
          <Input
            required
            type="email"
            name="user_email"
            label="Your Email"
            color="blue"
            className="text-white"
            crossOrigin=""
          />
          <Textarea
            required
            name="message"
            label="Your Message"
            color="blue"
            className="text-white"
            rows={5}
          />

          <Button
            type="submit"
            size="lg"
            color="blue"
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : t("Send Message")}
          </Button>
        </form>

        {sent && (
          <div className="mt-6 text-center">
            <Typography className="text-green-400 font-medium">
              ✅ Message sent successfully!
            </Typography>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Contacts;
