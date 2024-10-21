import React from "react";
import SectionTitle from "@/components/user_section_title";
import styles from "./index.module.css";
import ContactForm from "@/components/user_contact/contact_form";
import ContactInformation from "@/components/user_contact/contact_information";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className={styles.contact}>
        <div>
          {/* ? SECTION TITLE */}
          <div>
            <SectionTitle>Contact Me</SectionTitle>
          </div>
          {/* ?contact information*/}
          <div>
            <ContactInformation />
          </div>
        </div>
        <div>
          {/* ?MESAGGE ME */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
