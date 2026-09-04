export const site = {
  name: "Dra. Ainara",
  defaultTitle: "Dra. Ainara | Medicina y PNI Clínica en Bilbao",
  defaultDescription:
    "Medicina y Psiconeuroinmunología Clínica en Bilbao desde una perspectiva médica, individualizada y prudente.",
  doctor: {
    firstName: "Ainara",
    lastName: null,
    displayName: "Dra. Ainara",
    profession: "Médico",
    experience: { years: null, label: "Años de experiencia profesional", summary: null },
    pniEducation: {
      type: "Máster",
      title: "Psiconeuroinmunología Clínica",
      durationYears: 3,
      institution: null,
    },
    registration: { number: null, college: null },
  },
  clinic: {
    city: "Bilbao",
    name: null,
    address: null,
    phone: null,
    email: null,
    schedule: null,
  },
  consultation: { duration: null, price: null, online: null },
  booking: { provider: "mock" as const },
  social: { instagram: null, linkedin: null },
  legal: { privacyUrl: null, cookiesUrl: null },
  analytics: { enabled: false },
} as const;

const base = import.meta.env.BASE_URL;
const route = (path = "") => `${base}${path}`.replace(/\/+/g, "/");

export const paths = {
  home: route(),
  pniBilbao: route("pni-bilbao/"),
  doctor: route("dra-ainara/"),
  pni: route("que-es-pni/"),
  consultation: route("consulta/"),
  resources: route("recursos/"),
} as const;
