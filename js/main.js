const CONTACT_EMAIL = "MARLIOT-MONTAGNE.Tom@lycee-saintdenis.com";

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "fermer" : "menu";
  });
}

const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const body =
      data.get("message") + "\n\n— " + data.get("nom") + " (" + data.get("email") + ")";

    window.location.href =
      "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(data.get("objet")) +
      "&body=" + encodeURIComponent(body);

    document.querySelector(".form-status").textContent =
      "Votre messagerie va s'ouvrir avec le message prêt à être envoyé.";
  });
}