export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavDropdownItem[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Tentang Kami",
    children: [
      { label: "Perusahaan", href: "/tentang-kami", description: "Profil & visi misi perusahaan", icon: "mdi:office-building" },
      { label: "Sertifikasi", href: "/sertifikasi", description: "Sertifikasi & legalitas produk", icon: "mdi:check-decagram" },
      { label: "Alur Maklon", href: "/alur-maklon", description: "Tahapan proses maklon", icon: "mdi:sign-direction" },
      { label: "Kontak", href: "/kontak", description: "Hubungi tim Aquila Magna", icon: "mdi:phone" },
    ],
  },
  {
    label: "Layanan Maklon",
    children: [
      { label: "OEM / ODM", href: "/oem-odm", description: "Jasa maklon skincare & kosmetik", icon: "mdi:factory" },
      { label: "R&D / Formulasi", href: "/research-development", description: "Research & development produk", icon: "mdi:flask" },
      { label: "Merek & Paten", href: "/merek-paten", description: "Pendaftaran merek & HKI", icon: "mdi:file-certificate" },
    ],
  },
  { label: "Produk Maklon", href: "/produk-maklon" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Blog", href: "/blog" },
];