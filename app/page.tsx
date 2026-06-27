"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  Database,
  Users,
  UserMinus,
  History,
  Shield,
  Mail,
  Send,
  Calendar,
  Contact,
  Archive,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Plus,
  Bell,
  Lock,
  Briefcase,
  FileCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Phone,
  Globe,
  MapPin,
  Building2,
  Eye,
  Upload,
  Baby,
  GraduationCap,
  Award,
  Heart,
  DollarSign,
  Check,
  Zap,
  Trash2,
  Edit,
  Clock,
  PlusCircle,
  UserPlus,
  Palette,
  ChevronDown,
} from "lucide-react";

// --- MOCK DATA & CONFIGURATION ---

const THEMES = {
  indigo: {
    primary: "bg-indigo-600",
    hover: "hover:bg-indigo-700",
    text: "text-indigo-700",
    textLight: "text-indigo-600",
    bgLight: "bg-indigo-50",
    borderLight: "border-indigo-100",
    border: "border-indigo-600",
    shadow: "shadow-indigo-100",
    appBg: "bg-gradient-to-br from-slate-50 via-indigo-50/50 to-slate-100",
  },
  emerald: {
    primary: "bg-emerald-600",
    hover: "hover:bg-emerald-700",
    text: "text-emerald-700",
    textLight: "text-emerald-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-100",
    border: "border-emerald-600",
    shadow: "shadow-emerald-100",
    appBg: "bg-gradient-to-br from-slate-50 via-emerald-50/50 to-slate-100",
  },
  slate: {
    primary: "bg-slate-900",
    hover: "hover:bg-slate-800",
    text: "text-slate-900",
    textLight: "text-slate-700",
    bgLight: "bg-slate-100",
    borderLight: "border-slate-200",
    border: "border-slate-900",
    shadow: "shadow-slate-100",
    appBg: "bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-200/50",
  },
  amber: {
    primary: "bg-amber-600",
    hover: "hover:bg-amber-700",
    text: "text-amber-700",
    textLight: "text-amber-600",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-100",
    border: "border-amber-600",
    shadow: "shadow-amber-100",
    appBg: "bg-gradient-to-br from-slate-50 via-amber-50/50 to-slate-100",
  },
  rose: {
    primary: "bg-rose-600",
    hover: "hover:bg-rose-700",
    text: "text-rose-700",
    textLight: "text-rose-600",
    bgLight: "bg-rose-50",
    borderLight: "border-rose-100",
    border: "border-rose-600",
    shadow: "shadow-rose-100",
    appBg: "bg-gradient-to-br from-slate-50 via-rose-50/50 to-slate-100",
  },
  sky: {
    primary: "bg-sky-600",
    hover: "hover:bg-sky-700",
    text: "text-sky-700",
    textLight: "text-sky-600",
    bgLight: "bg-sky-50",
    borderLight: "border-sky-100",
    border: "border-sky-600",
    shadow: "shadow-sky-100",
    appBg: "bg-gradient-to-br from-slate-50 via-sky-50/50 to-slate-100",
  },
  teal: {
    primary: "bg-teal-600",
    hover: "hover:bg-teal-700",
    text: "text-teal-700",
    textLight: "text-teal-600",
    bgLight: "bg-teal-50",
    borderLight: "border-teal-100",
    border: "border-teal-600",
    shadow: "shadow-teal-100",
    appBg: "bg-gradient-to-br from-slate-50 via-teal-50/50 to-slate-100",
  },
  violet: {
    primary: "bg-violet-600",
    hover: "hover:bg-violet-700",
    text: "text-violet-700",
    textLight: "text-violet-600",
    bgLight: "bg-violet-50",
    borderLight: "border-violet-100",
    border: "border-violet-600",
    shadow: "shadow-violet-100",
    appBg: "bg-gradient-to-br from-slate-50 via-violet-50/50 to-slate-100",
  },
  red: {
    primary: "bg-red-600",
    hover: "hover:bg-red-700",
    text: "text-red-700",
    textLight: "text-red-600",
    bgLight: "bg-red-50",
    borderLight: "border-red-100",
    border: "border-red-600",
    shadow: "shadow-red-100",
    appBg: "bg-gradient-to-br from-slate-50 via-red-50/50 to-slate-100",
  },
  pink: {
    primary: "bg-pink-600",
    hover: "hover:bg-pink-700",
    text: "text-pink-700",
    textLight: "text-pink-600",
    bgLight: "bg-pink-50",
    borderLight: "border-pink-100",
    border: "border-pink-600",
    shadow: "shadow-pink-100",
    appBg: "bg-gradient-to-br from-slate-50 via-pink-50/50 to-slate-100",
  },
};

const LiveClock = ({ theme = "indigo" }: { theme?: string }) => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 0);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!time) return null;

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const dayName = days[time.getDay()];
  const dateNum = time.getDate();
  const monthName = months[time.getMonth()];
  const year = time.getFullYear();
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  const activeColors = THEMES[theme as keyof typeof THEMES] || THEMES.indigo;

  return (
    <div className={`flex items-center gap-2 ${activeColors.bgLight} border ${activeColors.borderLight} ${activeColors.text} px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs`}>
      <Clock className="w-3.5 h-3.5 animate-pulse" />
      <span>
        {dayName}, {dateNum} {monthName} {year} — <span className="font-mono font-bold">{hours}:{minutes}:{seconds}</span> WIB
      </span>
    </div>
  );
};

const MENU_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "master_data", label: "Master Data", icon: Database },
  { id: "pegawai", label: "Data Pegawai", icon: Users },
  { id: "non_pegawai", label: "Data Non Pegawai", icon: UserMinus },
  { id: "riwayat", label: "Riwayat Pegawai", icon: History },
  { id: "asuransi", label: "Asuransi Pegawai", icon: Shield },
  { id: "surat_masuk", label: "Surat Masuk", icon: Mail },
  { id: "disposisi", label: "Disposisi Surat", icon: Send },
  { id: "agenda", label: "Jadwal Agenda", icon: Calendar },
  { id: "kontak", label: "Kontak Relasi", icon: Contact },
  { id: "arsip", label: "Arsip", icon: Archive },
  { id: "laporan", label: "Laporan", icon: FileText },
  { id: "pengaturan", label: "Pengaturan", icon: Settings },
];

const INITIAL_MASTER_DATA: Record<
  string,
  { label: string; items: { kode: string; nama: string; keterangan: string }[] }
> = {
  pangkat_golongan: {
    label: "Pangkat & Golongan Ruang",
    items: [
      { kode: "I/a", nama: "Juru Muda", keterangan: "Golongan I/a" },
      { kode: "II/a", nama: "Pengatur Muda", keterangan: "Golongan II/a" },
      { kode: "III/a", nama: "Penata Muda", keterangan: "Golongan III/a" },
      {
        kode: "III/b",
        nama: "Penata Muda Tingkat I",
        keterangan: "Golongan III/b",
      },
      { kode: "IV/a", nama: "Pembina", keterangan: "Golongan IV/a" },
    ],
  },
  jabatan: {
    label: "Jabatan",
    items: [
      {
        kode: "JAB-01",
        nama: "Kepala Dinas / Badan",
        keterangan: "Pimpinan Tinggi Pratama",
      },
      {
        kode: "JAB-02",
        nama: "Kepala Sub Bagian",
        keterangan: "Pengawas Administrasi Eselon IV",
      },
      {
        kode: "JAB-03",
        nama: "Pranata Komputer",
        keterangan: "Fungsional Keahlian Teknis IT",
      },
      {
        kode: "JAB-04",
        nama: "Arsiparis",
        keterangan: "Fungsional Kearsipan Dokumen",
      },
    ],
  },
  tipe_jabatan: {
    label: "Tipe Jabatan",
    items: [
      {
        kode: "TJ-STR",
        nama: "Struktural",
        keterangan: "Jabatan pimpinan / struktural",
      },
      {
        kode: "TJ-FUN",
        nama: "Fungsional",
        keterangan: "Jabatan profesi keahlian khusus",
      },
      {
        kode: "TJ-PEL",
        nama: "Pelaksana",
        keterangan: "Jabatan staf administrasi umum",
      },
    ],
  },
  eselon_jenjang: {
    label: "Eselon/Jenjang",
    items: [
      { kode: "II/a", nama: "Eselon II.a", keterangan: "Kepala Dinas/Badan" },
      {
        kode: "III/a",
        nama: "Eselon III.a",
        keterangan: "Kepala Bagian / Kabid",
      },
      {
        kode: "IV/a",
        nama: "Eselon IV.a",
        keterangan: "Kepala Sub Bagian / Kasi",
      },
      { kode: "NON-ES", nama: "Non Eselon", keterangan: "Staf / Pelaksana" },
    ],
  },
  group_status_sdmk: {
    label: "Group Status Kepegawaian SDMK",
    items: [
      {
        kode: "GRP-01",
        nama: "SDM Kesehatan PNS",
        keterangan: "PNS bidang kesehatan",
      },
      {
        kode: "GRP-02",
        nama: "SDM Kesehatan Non PNS",
        keterangan: "Kontrak/Honorer Kesehatan",
      },
    ],
  },
  status_kepegawaian_sdmk: {
    label: "Status Kepegawaian SDMK",
    items: [
      { kode: "ST-PNS", nama: "PNS", keterangan: "Pegawai Negeri Sipil tetap" },
      {
        kode: "ST-PPPK",
        nama: "PPPK",
        keterangan: "Pegawai Pemerintah Perjanjian Kerja",
      },
      {
        kode: "ST-TKK",
        nama: "Tenaga Kerja Kontrak",
        keterangan: "Tenaga kerja kontrak daerah/pusat",
      },
    ],
  },
  jenis_kelamin: {
    label: "Jenis Kelamin",
    items: [
      { kode: "L", nama: "Laki-laki", keterangan: "Laki-laki (L)" },
      { kode: "P", nama: "Perempuan", keterangan: "Perempuan (P)" },
    ],
  },
  kewarganegaraan: {
    label: "Kewarganegaraan",
    items: [
      {
        kode: "WNI",
        nama: "Warga Negara Indonesia",
        keterangan: "Penduduk WNI",
      },
      { kode: "WNA", nama: "Warga Negara Asing", keterangan: "Penduduk WNA" },
    ],
  },
  agama: {
    label: "Agama",
    items: [
      { kode: "AG-01", nama: "Islam", keterangan: "Agama Islam" },
      {
        kode: "AG-02",
        nama: "Kristen Protestan",
        keterangan: "Agama Kristen Protestan",
      },
      { kode: "AG-03", nama: "Katolik", keterangan: "Agama Katolik" },
      { kode: "AG-04", nama: "Hindu", keterangan: "Agama Hindu" },
      { kode: "AG-05", nama: "Buddha", keterangan: "Agama Buddha" },
      { kode: "AG-06", nama: "Konghucu", keterangan: "Agama Konghucu" },
    ],
  },
  ptkp_pajak: {
    label: "PTKP Pajak",
    items: [
      {
        kode: "TK/0",
        nama: "Tidak Kawin (0 Tanggungan)",
        keterangan: "Sesuai ketentuan PTKP Pajak",
      },
      {
        kode: "K/0",
        nama: "Kawin (0 Tanggungan)",
        keterangan: "Sesuai ketentuan PTKP Pajak",
      },
      {
        kode: "K/1",
        nama: "Kawin (1 Tanggungan)",
        keterangan: "Sesuai ketentuan PTKP Pajak",
      },
    ],
  },
  kategori_sdmk: {
    label: "Kategori SDMK",
    items: [
      {
        kode: "KAT-MED",
        nama: "Tenaga Medis",
        keterangan: "Dokter, Dokter Gigi, Spesialis",
      },
      {
        kode: "KAT-KEP",
        nama: "Tenaga Keperawatan",
        keterangan: "Perawat dan Bidan",
      },
      {
        kode: "KAT-FAS",
        nama: "Tenaga Kefarmasian",
        keterangan: "Apoteker dan Asisten Apoteker",
      },
    ],
  },
  rumpun_sdmk: {
    label: "Rumpun SDMK",
    items: [
      {
        kode: "RMP-MED",
        nama: "Rumpun Medis",
        keterangan: "Kelompok Tenaga Medis Utama",
      },
      {
        kode: "RMP-KEP",
        nama: "Rumpun Keperawatan",
        keterangan: "Kelompok Tenaga Keperawatan",
      },
    ],
  },
  sub_rumpun_sdmk: {
    label: "Sub Rumpun SDMK",
    items: [
      {
        kode: "SRMP-01",
        nama: "Medis Umum",
        keterangan: "Dokter umum / gigi umum",
      },
      {
        kode: "SRMP-02",
        nama: "Medis Spesialis",
        keterangan: "Dokter spesialis penunjang / klinik",
      },
    ],
  },
  sub_kategori_sdmk: {
    label: "Sub Kategori SDMK",
    items: [
      {
        kode: "SUBK-01",
        nama: "SDMK Utama",
        keterangan: "Pelayanan medis primer",
      },
      {
        kode: "SUBK-02",
        nama: "SDMK Penunjang",
        keterangan: "Pelayanan medis sekunder/penunjang",
      },
    ],
  },
  jenis_sdmk: {
    label: "Jenis SDMK",
    items: [
      { kode: "JSD-01", nama: "Dokter Umum", keterangan: "Fungsional Dokter" },
      {
        kode: "JSD-02",
        nama: "Bidan Terampil",
        keterangan: "Fungsional Bidan",
      },
      {
        kode: "JSD-03",
        nama: "Perawat Ahli",
        keterangan: "Fungsional Perawat Ners",
      },
    ],
  },
  jenis_profesi: {
    label: "Jenis Profesi",
    items: [
      {
        kode: "PROF-01",
        nama: "Dokter Sp.PD",
        keterangan: "Spesialis Penyakit Dalam",
      },
      {
        kode: "PROF-02",
        nama: "Apoteker",
        keterangan: "Profesi Apoteker Terdaftar",
      },
      {
        kode: "PROF-03",
        nama: "Akuntan",
        keterangan: "Profesi Akuntansi Publik/Internal",
      },
    ],
  },
  jenjang_pendidikan: {
    label: "Jenjang Pendidikan",
    items: [
      {
        kode: "SMA",
        nama: "SMA/SMK Sederajat",
        keterangan: "Pendidikan Menengah Atas",
      },
      { kode: "D3", nama: "Diploma III (D3)", keterangan: "Pendidikan Vokasi" },
      { kode: "S1", nama: "Sarjana (S1)", keterangan: "Pendidikan Strata 1" },
      { kode: "S2", nama: "Magister (S2)", keterangan: "Pendidikan Strata 2" },
    ],
  },
  instalasi: {
    label: "Instalasi",
    items: [
      {
        kode: "INST-RJ",
        nama: "Instalasi Rawat Jalan",
        keterangan: "Unit rawat jalan poliklinik",
      },
      {
        kode: "INST-RI",
        nama: "Instalasi Rawat Inap",
        keterangan: "Unit perawatan rawat inap",
      },
      {
        kode: "INST-TU",
        nama: "Instalasi Tata Usaha",
        keterangan: "Gedung Kantor Administrasi",
      },
    ],
  },
  ruangan_unit: {
    label: "Ruangan/Unit",
    items: [
      {
        kode: "RU-UM",
        nama: "Unit Tata Usaha & Kepegawaian",
        keterangan: "Sekretariat utama TU",
      },
      {
        kode: "RU-KEU",
        nama: "Unit Keuangan",
        keterangan: "Ruang bendahara pengeluaran/penerimaan",
      },
      {
        kode: "RU-POLI",
        nama: "Poli Umum",
        keterangan: "Ruang periksa poli umum",
      },
    ],
  },
  sifat_surat: {
    label: "Sifat Surat",
    items: [
      {
        kode: "SF-01",
        nama: "Sangat Rahasia",
        keterangan: "Hanya untuk pejabat berwenang",
      },
      {
        kode: "SF-02",
        nama: "Penting",
        keterangan: "Harus segera didisposisikan",
      },
      { kode: "SF-03", nama: "Biasa", keterangan: "Surat rutin / umum" },
    ],
  },
  instruksi_disposisi: {
    label: "Instruksi Disposisi",
    items: [
      {
        kode: "INS-01",
        nama: "Tindak Lanjuti",
        keterangan: "Segera tindak lanjuti laporan",
      },
      {
        kode: "INS-02",
        nama: "Koordinasikan",
        keterangan: "Koordinasikan dengan unit terkait",
      },
      {
        kode: "INS-03",
        nama: "Hadirkan",
        keterangan: "Hadir dalam rapat koordinasi",
      },
    ],
  },
  tujuan_disposisi: {
    label: "Tujuan Disposisi",
    items: [
      {
        kode: "TUJ-01",
        nama: "Sub Bagian Kepegawaian",
        keterangan: "Urusan kepegawaian & diklat",
      },
      {
        kode: "TUJ-02",
        nama: "Sub Bagian Keuangan",
        keterangan: "Urusan anggaran & aset",
      },
      {
        kode: "TUJ-03",
        nama: "Staf Umum & Kearsipan",
        keterangan: "Urusan agenda harian / arsip",
      },
    ],
  },
  jenis_cuti: {
    label: "Jenis Cuti",
    items: [
      {
        kode: "CT-01",
        nama: "Cuti Tahunan",
        keterangan: "Hak cuti tahunan pegawai",
      },
      {
        kode: "CT-02",
        nama: "Cuti Sakit",
        keterangan: "Cuti dengan surat dokter resmi",
      },
      {
        kode: "CT-03",
        nama: "Cuti Melahirkan",
        keterangan: "Cuti bersalin/melahirkan",
      },
    ],
  },
  jenis_diklat: {
    label: "Jenis Diklat",
    items: [
      {
        kode: "DK-PIM",
        nama: "Diklat Kepemimpinan",
        keterangan: "Diklat penunjang jabatan struktural",
      },
      {
        kode: "DK-TEK",
        nama: "Diklat Teknis Kesehatan",
        keterangan: "Peningkatan keterampilan teknis medis",
      },
    ],
  },
  jenis_mutasi: {
    label: "Jenis Mutasi",
    items: [
      {
        kode: "MT-01",
        nama: "Mutasi Promosi",
        keterangan: "Kenaikan jabatan / eselon",
      },
      {
        kode: "MT-02",
        nama: "Mutasi Rotasi Intern",
        keterangan: "Perpindahan antar unit kerja internal",
      },
    ],
  },
  jenis_pensiun: {
    label: "Jenis Pensiun",
    items: [
      {
        kode: "PN-01",
        nama: "Batas Usia Pensiun",
        keterangan: "Pensiun karena usia maksimal",
      },
      {
        kode: "PN-02",
        nama: "Atas Permintaan Sendiri",
        keterangan: "Pensiun dini sukarela",
      },
    ],
  },
  jenis_asuransi: {
    label: "Jenis Asuransi",
    items: [
      {
        kode: "AS-BPJSK",
        nama: "BPJS Kesehatan",
        keterangan: "Jaminan kesehatan nasional",
      },
      {
        kode: "AS-BPJST",
        nama: "BPJS Ketenagakerjaan",
        keterangan: "Jaminan ketenagakerjaan pegawai",
      },
      {
        kode: "AS-TASPEN",
        nama: "TASPEN",
        keterangan: "Asuransi tabungan hari tua PNS",
      },
    ],
  },
  status_pegawai: {
    label: "Status Pegawai",
    items: [
      { kode: "ST-01", nama: "Aktif", keterangan: "Pegawai aktif bertugas" },
      {
        kode: "ST-02",
        nama: "Cuti Resmi",
        keterangan: "Pegawai sedang dalam masa cuti",
      },
      { kode: "ST-03", nama: "Pensiun", keterangan: "Pegawai purna tugas" },
    ],
  },
  jenis_nama_bank: {
    label: "Jenis Nama Bank",
    items: [
      {
        kode: "MANDIRI",
        nama: "Bank Mandiri",
        keterangan: "PT Bank Mandiri (Persero) Tbk",
      },
      {
        kode: "BRI",
        nama: "Bank Rakyat Indonesia",
        keterangan: "PT Bank Rakyat Indonesia (Persero) Tbk",
      },
      {
        kode: "BCA",
        nama: "Bank Central Asia",
        keterangan: "PT Bank Central Asia Tbk",
      },
      {
        kode: "BJB",
        nama: "Bank BJB",
        keterangan: "PT Bank Pembangunan Daerah Jawa Barat",
      },
    ],
  },
};

const INITIAL_PEGAWAI_LIST = [
  {
    nip: "198001012005011001",
    nik: "3273010101800001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    tempat_lahir: "Bandung",
    tanggal_lahir: "1980-01-01",
    jenis_kelamin: "L",
    agama: "AG-01",
    kewarganegaraan: "WNI",
    alamat: "Jl. Merdeka No. 45, Coblong, Kota Bandung",
    no_kk: "3273012345678901",
    ktp_pdf: "ktp_budi_santoso.pdf",
    kk_pdf: "kartu_keluarga_budi.pdf",
    pangkat_golongan: "III/b",
    jabatan: "JAB-01",
    ruangan_unit: "RU-UM",
    status_pegawai: "ST-01",
    tipe_jabatan: "TJ-STR",
    eselon_jenjang: "IV/a",
    kategori_sdmk: "KAT-MED",
    rumpun_sdmk: "RMP-MED",
    sub_rumpun_sdmk: "SRMP-01",
    sub_kategori_sdmk: "SUBK-01",
    group_status_sdmk: "PNS",
    status_kepegawaian: "PNS Daerah",
    jenis_sdmk: "JSD-01",
    tmt_rs: "2005-01-15",
    tmt_cpns: "2005-01-01",
    tmt_pns: "2006-03-01",
    tmt_p3k: "",
    tmt_p3k_pw: "",
    sk_pdf_non_asn: null,
    sk_pdf_cpns: "sk_cpns_budi.pdf",
    sk_pdf_pns: "sk_pns_budi.pdf",
    sk_pdf_p3k: null,
    sk_pdf_p3k_pw: null,
    sk_pdf_rs: "sk_rs_penempatan_budi.pdf",
    edu_nama_sekolah: "Institut Teknologi Bandung",
    edu_jenjang: "S2",
    edu_prodi: "Teknik Informatika",
    edu_no_ijazah: "IJZ-ITB-12345",
    edu_tahun_lulus: "2004",
    edu_pdf: "ijazah_s2_budi.pdf",
    profesi_nama_sekolah: "Institut Teknologi Bandung",
    profesi_jenjang: "S2",
    profesi_prodi: "Rekayasa Perangkat Lunak",
    profesi_no_ijazah: "IJZ-ITB-12345-PROF",
    profesi_tahun_lulus: "2004",
    profesi_pdf: "ijazah_prof_budi.pdf",
    profesi_jenis: "PROF-03",
    profesi_no_str: "STR-800101-2025",
    profesi_tgl_berlaku: "2020-01-01",
    profesi_tgl_kadaluarsa: "",
    profesi_is_seumur_hidup: true,
    profesi_no_sip: "SIP-901-UMUM-2026",
    profesi_tgl_sip: "2021-06-01",
    profesi_tgl_kadaluarsa_sip: "2026-06-01",
    profesi_pdf_str_sip: "str_sip_gabungan_budi.pdf",
    nikah_no_buku: "B-501/2008/VIII",
    nikah_no_kutipan: "KT-2008-B501",
    nikah_tgl: "2008-08-08",
    nikah_tempat: "KUA Coblong, Bandung",
    nikah_pdf: "buku_nikah_budi.pdf",
    jumlah_anak: 2,
    anak: [
      { nama: "Arga Santoso", tgl_lahir: "2010-05-12" },
      { nama: "Sania Putri Santoso", tgl_lahir: "2014-09-22" },
      { nama: "", tgl_lahir: "" },
    ],
    email: "budi.santoso@rs_daerah.go.id",
    no_telp: "081234567890",
    darurat_nama: "Sri Hartati",
    darurat_hubungan: "Istri",
    darurat_no_telp: "081298765432",
    ptkp_pajak: "K/2",
    npwp: "01.234.567.8-401.000",
    no_jkn_kis: "0001234567890",
    no_jamsostek: "98765432101",
    no_rekening: "Bank Mandiri - 1310023456789",
    npwp_pdf: "npwp_budi.pdf",
    bank_pdf: "buku_rekening_budi.pdf",
  },
  {
    nip: "198502152010122003",
    nik: "3273021502850002",
    nama: "Siti Aminah, S.Kep, Ners",
    tempat_lahir: "Yogyakarta",
    tanggal_lahir: "1985-02-15",
    jenis_kelamin: "P",
    agama: "AG-01",
    kewarganegaraan: "WNI",
    alamat: "Jl. Diponegoro No. 12, Sleman, Yogyakarta",
    no_kk: "3273025678901234",
    ktp_pdf: "ktp_siti_aminah.pdf",
    kk_pdf: "kartu_keluarga_siti.pdf",
    pangkat_golongan: "III/a",
    jabatan: "JAB-02",
    ruangan_unit: "RU-UGD",
    status_pegawai: "ST-01",
    tipe_jabatan: "TJ-FUN",
    eselon_jenjang: "NON-ES",
    kategori_sdmk: "KAT-MED",
    rumpun_sdmk: "RMP-MED",
    sub_rumpun_sdmk: "SRMP-01",
    sub_kategori_sdmk: "SUBK-02",
    group_status_sdmk: "PNS",
    status_kepegawaian: "PNS Daerah",
    jenis_sdmk: "JSD-02",
    tmt_rs: "2010-12-01",
    tmt_cpns: "2010-12-01",
    tmt_pns: "2012-02-01",
    tmt_p3k: "",
    tmt_p3k_pw: "",
    sk_pdf_non_asn: null,
    sk_pdf_cpns: "sk_cpns_siti.pdf",
    sk_pdf_pns: "sk_pns_siti.pdf",
    sk_pdf_p3k: null,
    sk_pdf_p3k_pw: null,
    sk_pdf_rs: "sk_rs_siti.pdf",
    edu_nama_sekolah: "Universitas Gadjah Mada",
    edu_jenjang: "S1",
    edu_prodi: "Ilmu Keperawatan",
    edu_no_ijazah: "IJZ-UGM-98765",
    edu_tahun_lulus: "2008",
    edu_pdf: "ijazah_s1_siti.pdf",
    profesi_nama_sekolah: "Universitas Gadjah Mada",
    profesi_jenjang: "S1",
    profesi_prodi: "Profesi Ners",
    profesi_no_ijazah: "PROF-UGM-98765",
    profesi_tahun_lulus: "2009",
    profesi_pdf: "ijazah_ners_siti.pdf",
    profesi_jenis: "PROF-02",
    profesi_no_str: "STR-850215-2027",
    profesi_tgl_berlaku: "2022-02-15",
    profesi_tgl_kadaluarsa: "2027-02-15",
    profesi_is_seumur_hidup: false,
    profesi_no_sip: "SIP-Nurse-UGM-2027",
    profesi_tgl_sip: "2022-03-01",
    profesi_tgl_kadaluarsa_sip: "2027-02-15",
    profesi_pdf_str_sip: "str_sip_ners_siti.pdf",
    nikah_no_buku: "B-302/2012/V",
    nikah_no_kutipan: "KT-2012-B302",
    nikah_tgl: "2012-05-15",
    nikah_tempat: "KUA Mlati, Sleman",
    nikah_pdf: "buku_nikah_siti.pdf",
    jumlah_anak: 1,
    anak: [
      { nama: "Rasyad Ramadhan", tgl_lahir: "2014-06-20" },
      { nama: "", tgl_lahir: "" },
      { nama: "", tgl_lahir: "" },
    ],
    email: "siti.aminah@rs_daerah.go.id",
    no_telp: "081398765432",
    darurat_nama: "Herman Prasetyo",
    darurat_hubungan: "Suami",
    darurat_no_telp: "081311223344",
    ptkp_pajak: "K/1",
    npwp: "02.345.678.9-402.000",
    no_jkn_kis: "0002345678901",
    no_jamsostek: "98711223344",
    no_rekening: "Bank Mandiri - 1310098765432",
    npwp_pdf: "npwp_siti.pdf",
    bank_pdf: "buku_rekening_siti.pdf",
  },
];

const INITIAL_NON_PEGAWAI_LIST = [
  {
    id: "NP-001",
    nik: "3273011111110001",
    nama: "Dedi Supriyadi",
    tempat_lahir: "Bandung",
    tanggal_lahir: "1990-05-10",
    jenis_kelamin: "L",
    agama: "Islam",
    pendidikan_terakhir: "SMA/SMK",
    status_perkawinan: "Kawin",
    alamat: "Jl. Dipatiukur No. 102, Bandung",
    no_hp_wa: "081234567890",
    email: "dedi.supriyadi@gmail.com",
    jabatan_tugas: "Tenaga Keamanan",
    unit_kerja: "Keamanan",
    status_kepegawaian: "Pihak Ketiga/Outsourcing",
    tgl_mulai_kerja: "2021-01-01",
    tgl_selesai_kontrak: "2026-12-31",
    status_aktif: "Aktif",
    ket: "PT Secure Guard Indonesia"
  },
  {
    id: "NP-002",
    nik: "3273022222220002",
    nama: "Rina Marlina",
    tempat_lahir: "Garut",
    tanggal_lahir: "1995-11-20",
    jenis_kelamin: "P",
    agama: "Islam",
    pendidikan_terakhir: "D3",
    status_perkawinan: "Belum Kawin",
    alamat: "Jl. Dago Barat No. 15, Bandung",
    no_hp_wa: "081987654321",
    email: "rina.marlina@gmail.com",
    jabatan_tugas: "Petugas Kebersihan",
    unit_kerja: "Sarana & Prasarana",
    status_kepegawaian: "Pihak Ketiga/Outsourcing",
    tgl_mulai_kerja: "2022-03-01",
    tgl_selesai_kontrak: "2025-12-31",
    status_aktif: "Aktif",
    ket: "PT Clean & Fresh"
  }
];

const nonPegawaiCols = [
  { header: "ID", accessor: "id" },
  { header: "Nama", accessor: "nama" },
  { header: "Peran/Posisi", accessor: "peran" },
  { header: "Kontak", accessor: "kontak" },
];
const nonPegawaiData = [
  {
    id: "NP-001",
    nama: "Dedi Supriyadi",
    peran: "Tenaga Keamanan",
    kontak: "081234567890",
  },
  {
    id: "NP-002",
    nama: "Rina Marlina",
    peran: "Petugas Kebersihan",
    kontak: "081987654321",
  },
];

const INITIAL_RIWAYAT_CUTI = [
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    jenis_cuti: "Cuti Tahunan",
    tgl_mulai: "2025-10-10",
    tgl_selesai: "2025-10-15",
    durasi: "5",
    no_sk: "SK-CUTI/2025/109",
    status: "Disetujui",
    keterangan: "Keperluan keluarga di luar kota"
  },
  {
    nip: "198502152010122003",
    nama: "Siti Aminah, S.Kep, Ners",
    jenis_cuti: "Cuti Melahirkan",
    tgl_mulai: "2024-03-01",
    tgl_selesai: "2024-06-01",
    durasi: "90",
    no_sk: "SK-CUTI/2024/044",
    status: "Disetujui",
    keterangan: "Persalinan anak kedua"
  },
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    jenis_cuti: "Cuti Sakit",
    tgl_mulai: "2024-11-12",
    tgl_selesai: "2024-11-14",
    durasi: "3",
    no_sk: "SURAT-DOKTER/2024/991",
    status: "Disetujui",
    keterangan: "Sakit Demam Berdarah (Rawat Inap)"
  }
];

const INITIAL_RIWAYAT_PANGKAT = [
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    pangkat: "Penata Muda Tk. I",
    golongan: "III/b",
    jenis_kenaikan: "Kenaikan Pangkat Pilihan",
    tmt_pangkat: "2021-04-01",
    no_sk: "823/Kep/302-BKPSDM/2021",
    tgl_sk: "2021-03-15",
    pejabat: "Bupati Bandung"
  },
  {
    nip: "198502152010122003",
    nama: "Siti Aminah, S.Kep, Ners",
    pangkat: "Penata Muda",
    golongan: "III/a",
    jenis_kenaikan: "Kenaikan Pangkat Reguler",
    tmt_pangkat: "2022-10-01",
    no_sk: "823/Kep/114-BKD/2022",
    tgl_sk: "2022-09-20",
    pejabat: "Gubernur Jawa Barat"
  }
];

const INITIAL_RIWAYAT_JABATAN = [
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    jabatan: "Kepala Sub Bagian Umum & Kepegawaian",
    unit_kerja: "Sub Bagian Umum",
    jenis_jabatan: "Struktural",
    tmt_jabatan: "2022-01-10",
    no_sk: "821.2/Kep.001-BKPSDM/2022",
    tgl_sk: "2022-01-05",
    pejabat: "Kepala Dinas Kesehatan",
    eselon: "IV/a"
  },
  {
    nip: "198502152010122003",
    nama: "Siti Aminah, S.Kep, Ners",
    jabatan: "Perawat Ahli Pertama",
    unit_kerja: "Seksi Pelayanan Medis / UGD",
    jenis_jabatan: "Fungsional Tertentu",
    tmt_jabatan: "2020-12-01",
    no_sk: "821/Kep.45-BKD/2020",
    tgl_sk: "2020-11-28",
    pejabat: "Direktur Rumah Sakit",
    eselon: "Non-Eselon"
  }
];

const INITIAL_RIWAYAT_DIKLAT = [
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    nama_diklat: "Pelatihan Kepemimpinan Pengawas (PKP)",
    jenis_diklat: "Diklat Struktural",
    penyelenggara: "Badan Pengembangan Sumber Daya Manusia (BPSDM)",
    tgl_mulai: "2023-05-01",
    tgl_selesai: "2023-08-15",
    jam_pelajaran: "240",
    no_sertifikat: "REG-PKP/III/2023/1023",
    tgl_sertifikat: "2023-08-20"
  },
  {
    nip: "198502152010122003",
    nama: "Siti Aminah, S.Kep, Ners",
    nama_diklat: "Bantuan Hidup Jantung Lanjut (ACLS) Terpadu",
    jenis_diklat: "Diklat Teknis Kesehatan",
    penyelenggara: "Perhimpunan Dokter Spesialis Kardiovaskular Indonesia (PERKI)",
    tgl_mulai: "2024-02-10",
    tgl_selesai: "2024-02-14",
    jam_pelajaran: "40",
    no_sertifikat: "CERT-ACLS/PERKI/2024/492",
    tgl_sertifikat: "2024-02-14"
  }
];

const INITIAL_RIWAYAT_PENGHARGAAN = [
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    nama_penghargaan: "Satyalancana Karya Satya XX Tahun",
    jenis_penghargaan: "Penghargaan Negara",
    tahun: "2025",
    no_sk: "Keppres No. 12/TK/Tahun 2025",
    tgl_sk: "2025-05-20",
    pemberi: "Presiden Republik Indonesia"
  },
  {
    nip: "198502152010122003",
    nama: "Siti Aminah, S.Kep, Ners",
    nama_penghargaan: "Perawat Teladan Instansi Berprestasi",
    jenis_penghargaan: "Penghargaan Instansi",
    tahun: "2023",
    no_sk: "802/Kep.20-RSUD/2023",
    tgl_sk: "2023-11-12",
    pemberi: "Direktur Utama RSUD"
  }
];

const INITIAL_RIWAYAT_KGB = [
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    gapok_baru: "4500000",
    gapok_lama: "4300000",
    golongan: "III/b",
    masa_kerja: "18 Tahun 2 Bulan",
    tmt_kgb: "2024-03-01",
    no_surat: "822/KGB-012/Subbag-TU/2024",
    tgl_surat: "2024-02-15",
    pejabat: "Kepala Bagian Tata Usaha"
  },
  {
    nip: "198502152010122003",
    nama: "Siti Aminah, S.Kep, Ners",
    gapok_baru: "3800000",
    gapok_lama: "3650000",
    golongan: "III/a",
    masa_kerja: "12 Tahun 4 Bulan",
    tmt_kgb: "2024-12-01",
    no_surat: "822/KGB-104/Subbag-TU/2024",
    tgl_surat: "2024-11-10",
    pejabat: "Kepala Bagian Tata Usaha"
  }
];

const INITIAL_RIWAYAT_MUTASI = [
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    jenis_mutasi: "Rotasi Internal",
    asal: "Seksi Perencanaan & TI",
    tujuan: "Sub Bagian Umum & Kepegawaian",
    jabatan_baru: "Kepala Sub Bagian Umum & Kepegawaian",
    tmt_mutasi: "2022-01-10",
    no_sk: "824/Kep-10/BKPSDM/2022",
    tgl_sk: "2022-01-05"
  },
  {
    nip: "198502152010122003",
    nama: "Siti Aminah, S.Kep, Ners",
    jenis_mutasi: "Promosi Jabatan",
    asal: "Pelayanan Rawat Jalan",
    tujuan: "Pelayanan Medis UGD",
    jabatan_baru: "Koordinator Perawat Shift UGD",
    tmt_mutasi: "2023-06-01",
    no_sk: "824/Kep-99/RSUD/2023",
    tgl_sk: "2023-05-25"
  }
];

const INITIAL_RIWAYAT_PENSIUN = [
  {
    nip: "198001012005011001",
    nama: "Budi Santoso, S.Kom, M.Kom",
    jenis_pensiun: "Belum Pensiun (Proyeksi 2038)",
    tmt_pensiun: "2038-01-01",
    golongan_terakhir: "IV/a",
    jabatan_terakhir: "Kepala Sub Bagian Umum & Kepegawaian",
    no_sk: "TIDAK-ADA",
    tgl_sk: "2025-06-26",
    pejabat: "Bupati"
  }
];

const asuransiCols = [
  { header: "Nama Pegawai", accessor: "nama" },
  { header: "No. BPJS/Asuransi", accessor: "no_bpjs" },
  { header: "Jenis Asuransi", accessor: "jenis" },
  { header: "Status", accessor: "status" },
];
const asuransiData = [
  {
    nama: "Budi Santoso, S.Kom",
    no_bpjs: "000123456789",
    jenis: "BPJS Kesehatan",
    status: "Aktif",
  },
  {
    nama: "Ahmad Fauzi, S.E.",
    no_bpjs: "000987654321",
    jenis: "BPJS Ketenagakerjaan",
    status: "Aktif",
  },
];

const suratMasukCols = [
  { header: "No. Surat", accessor: "no_surat" },
  { header: "Pengirim", accessor: "pengirim" },
  { header: "Tanggal", accessor: "tanggal" },
  { header: "Perihal", accessor: "perihal" },
  { header: "Status", accessor: "status" },
];
const suratMasukData = [
  {
    no_surat: "001/A/2024",
    pengirim: "Dinas Pendidikan",
    tanggal: "01 Okt 2024",
    perihal: "Undangan Rapat Koordinasi",
    status: "Didisposisikan",
  },
  {
    no_surat: "002/B/2024",
    pengirim: "Kementerian Dalam Negeri",
    tanggal: "05 Okt 2024",
    perihal: "Edaran Aturan Kepegawaian",
    status: "Baru",
  },
];

const disposisiCols = [
  { header: "No. Surat", accessor: "no_surat" },
  { header: "Diteruskan Ke", accessor: "penerima" },
  { header: "Instruksi", accessor: "instruksi" },
  { header: "Tgl Disposisi", accessor: "tanggal" },
];
const disposisiData = [
  {
    no_surat: "001/A/2024",
    penerima: "Kasubag Umum",
    instruksi: "Segera tindak lanjuti dan siapkan materi",
    tanggal: "02 Okt 2024",
  },
];

const agendaCols = [
  { header: "Tanggal", accessor: "tanggal" },
  { header: "Waktu", accessor: "waktu" },
  { header: "Acara", accessor: "acara" },
  { header: "Lokasi", accessor: "lokasi" },
];
const agendaData = [
  {
    tanggal: "10 Okt 2024",
    waktu: "09:00 WIB",
    acara: "Rapat Evaluasi Bulanan",
    lokasi: "Ruang Rapat Utama",
  },
  {
    tanggal: "15 Okt 2024",
    waktu: "13:00 WIB",
    acara: "Penyambutan Kunjungan Kerja",
    lokasi: "Aula Gedung A",
  },
];

const kontakCols = [
  { header: "Nama Instansi", accessor: "instansi" },
  { header: "Kontak Person", accessor: "person" },
  { header: "No. Telepon", accessor: "telepon" },
  { header: "Email", accessor: "email" },
];
const kontakData = [
  {
    instansi: "Dinas Kesehatan Kota",
    person: "dr. Andi",
    telepon: "081122334455",
    email: "info@dinkes.go.id",
  },
  {
    instansi: "Vendor IT Solusindo",
    person: "Bpk. Hendra",
    telepon: "085566778899",
    email: "hendra@itsolusindo.com",
  },
];

const arsipCols = [
  { header: "Kode Arsip", accessor: "kode" },
  { header: "Nama Dokumen", accessor: "nama" },
  { header: "Kategori", accessor: "kategori" },
  { header: "Tahun", accessor: "tahun" },
];
const arsipData = [
  {
    kode: "ARS-2023-01",
    nama: "Laporan Pertanggungjawaban Tahunan",
    kategori: "Keuangan",
    tahun: "2023",
  },
  {
    kode: "ARS-2024-02",
    nama: "SK Pengangkatan Pegawai Baru",
    kategori: "Kepegawaian",
    tahun: "2024",
  },
];

const laporanCols = [
  { header: "Jenis Laporan", accessor: "jenis" },
  { header: "Periode", accessor: "periode" },
  { header: "Tanggal Dibuat", accessor: "tanggal" },
  { header: "Status", accessor: "status" },
];
const laporanData = [
  {
    jenis: "Rekap Kehadiran Pegawai",
    periode: "September 2024",
    tanggal: "01 Okt 2024",
    status: "Selesai",
  },
  {
    jenis: "Laporan Inventaris Barang",
    periode: "Triwulan 3 2024",
    tanggal: "05 Okt 2024",
    status: "Draft",
  },
];

// --- COMPONENTS ---

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  trend,
  colorClass,
}: any) => (
  <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
    <div className={`absolute top-6 right-6 ${colorClass} w-10 h-10 rounded-xl flex items-center justify-center`}>
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
      {title}
    </p>
    <p className="text-3xl font-extrabold text-slate-800 drop-shadow-sm">{value}</p>
    {trend && (
      <div className="mt-3 text-[10px] bg-emerald-100/50 text-emerald-700 px-2 py-0.5 rounded-full inline-block font-bold">{trend}</div>
    )}
  </div>
);

const GenericTable = ({
  title,
  columns,
  data,
}: {
  title: string;
  columns: any[];
  data: any[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
        <p className="text-slate-500 text-sm mt-1">
          Kelola dan pantau informasi {title.toLowerCase()}
        </p>
      </div>
      <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-bold transition-colors shadow-sm flex items-center justify-center">
        <Plus className="w-4 h-4 mr-2" />
        Tambah Data
      </button>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari data..."
            className="pl-10 pr-4 py-1.5 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 w-full sm:w-64 bg-slate-50"
          />
        </div>
        <button className="text-slate-500 hover:text-slate-700 border border-slate-200 px-3 py-1.5 rounded text-xs bg-white font-bold">
          Filter
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold border-b border-slate-200">
              {columns.map((col, idx) => (
                <th key={idx} className="px-4 py-3 whitespace-nowrap">
                  {col.header}
                </th>
              ))}
              <th className="px-4 py-3 text-right whitespace-nowrap">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-xs divide-y divide-slate-50">
            {data.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                {columns.map((col, cIdx) => (
                  <td
                    key={cIdx}
                    className="px-4 py-3 text-slate-700 whitespace-nowrap"
                  >
                    {col.accessor === "status" ? (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          row[col.accessor] === "Aktif" ||
                          row[col.accessor] === "Selesai"
                            ? "bg-emerald-100 text-emerald-700"
                            : row[col.accessor] === "Cuti" ||
                                row[col.accessor] === "Didisposisikan"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {row[col.accessor]}
                      </span>
                    ) : (
                      row[col.accessor]
                    )}
                  </td>
                ))}
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-800 font-bold text-xs mr-4 transition-colors">
                    Edit
                  </button>
                  <button className="text-rose-600 hover:text-rose-800 font-bold text-xs transition-colors">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-6 py-8 text-center text-slate-500"
                >
                  Tidak ada data ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-white">
        <span>Menampilkan {data.length} data</span>
        <div className="flex gap-2">
          <button
            className="px-2 py-1 border border-slate-200 rounded text-slate-400 bg-slate-50"
            disabled
          >
            Prev
          </button>
          <button className="px-2 py-1 border border-slate-200 rounded text-slate-600 bg-white hover:bg-slate-50 font-bold">
            1
          </button>
          <button className="px-2 py-1 border border-slate-200 rounded text-slate-600 bg-white hover:bg-slate-50">
            Next
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const MasterDataView = ({
  store,
  selectedCategory,
  onChangeCategory,
  onAddItem,
  onEditItem,
  onDeleteItem,
}: {
  store: typeof INITIAL_MASTER_DATA;
  selectedCategory: string;
  onChangeCategory: (cat: string) => void;
  onAddItem: (cat: string, item: any) => void;
  onEditItem: (cat: string, index: number, item: any) => void;
  onDeleteItem: (cat: string, index: number) => void;
}) => {
  const currentCategory = store[selectedCategory] || { label: "", items: [] };
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formKode, setFormKode] = useState("");
  const [formNama, setFormNama] = useState("");
  const [formKeterangan, setFormKeterangan] = useState("");

  const filteredItems = currentCategory.items.filter(
    (item) =>
      item.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keterangan.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const openAddModal = () => {
    setEditingIndex(null);
    setFormKode("");
    setFormNama("");
    setFormKeterangan("");
    setIsModalOpen(true);
  };

  const openEditModal = (index: number, item: any) => {
    setEditingIndex(index);
    setFormKode(item.kode);
    setFormNama(item.nama);
    setFormKeterangan(item.keterangan);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formKode || !formNama) return;
    const item = { kode: formKode, nama: formNama, keterangan: formKeterangan };
    if (editingIndex !== null) {
      onEditItem(selectedCategory, editingIndex, item);
    } else {
      onAddItem(selectedCategory, item);
    }
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-lg font-bold text-slate-800">Master Data Utama</h2>
        <p className="text-slate-500 text-sm mt-1">
          Kelola parameter dan referensi sistem tata usaha.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Sidebar/Dropdown Pemilihan Kategori */}
        <div className="lg:col-span-1 space-y-3">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Kategori Master Data ({Object.keys(store).length})
          </label>

          {/* Mobile and Tablet Select Dropdown */}
          <div className="block lg:hidden">
            <select
              value={selectedCategory}
              onChange={(e) => onChangeCategory(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm bg-white"
            >
              {Object.entries(store).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Left Rail Sidebar Navigation */}
          <div className="hidden lg:flex flex-col bg-white rounded-xl border border-slate-200 p-2 max-h-[500px] overflow-y-auto no-scrollbar shadow-sm">
            {Object.entries(store).map(([key, value]) => (
              <button
                key={key}
                onClick={() => onChangeCategory(key)}
                className={`w-full text-left px-3 py-2 rounded text-xs font-medium transition-colors ${
                  selectedCategory === key
                    ? "bg-indigo-50 text-indigo-700 font-bold border-r-2 border-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tabel Data & Kontrol */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <div className="flex-1 max-w-sm">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari kode, nama, atau keterangan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-1.5 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-300 w-full bg-slate-50"
                  />
                </div>
              </div>

              <button
                onClick={openAddModal}
                className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-bold transition-colors shadow-sm flex items-center justify-center self-start sm:self-auto cursor-pointer"
              >
                <Plus className="w-4 h-4 mr-2" />
                Tambah {currentCategory.label}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold border-b border-slate-200">
                    <th className="px-4 py-3 whitespace-nowrap w-24">Kode</th>
                    <th className="px-4 py-3 whitespace-nowrap">Nama</th>
                    <th className="px-4 py-3 whitespace-nowrap">Keterangan</th>
                    <th className="px-4 py-3 text-right whitespace-nowrap w-32">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-slate-50">
                  {filteredItems.map((item, rIdx) => (
                    <tr
                      key={rIdx}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="px-4 py-3 font-mono font-bold text-slate-600 whitespace-nowrap">
                        {item.kode}
                      </td>
                      <td className="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">
                        {item.nama}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {item.keterangan}
                      </td>
                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => openEditModal(rIdx, item)}
                          className="text-indigo-600 hover:text-indigo-800 font-bold text-xs mr-4 transition-colors cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDeleteItem(selectedCategory, rIdx)}
                          className="text-rose-600 hover:text-rose-800 font-bold text-xs transition-colors cursor-pointer"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredItems.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-8 text-center text-slate-500"
                      >
                        Tidak ada data ditemukan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-white">
              <span>Menampilkan {filteredItems.length} data</span>
              <div className="flex gap-2">
                <button
                  className="px-2 py-1 border border-slate-200 rounded text-slate-400 bg-slate-50"
                  disabled
                >
                  Prev
                </button>
                <button className="px-2 py-1 border border-slate-200 rounded text-slate-600 bg-white hover:bg-slate-50 font-bold">
                  1
                </button>
                <button className="px-2 py-1 border border-slate-200 rounded text-slate-600 bg-white hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Minimalist Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden border border-slate-100"
          >
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-950 text-sm">
                {editingIndex !== null ? "Edit" : "Tambah"}{" "}
                {currentCategory.label}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Kode
                </label>
                <input
                  type="text"
                  required
                  value={formKode}
                  onChange={(e) => setFormKode(e.target.value)}
                  placeholder="Contoh: III/a, JAB-01"
                  className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  value={formNama}
                  onChange={(e) => setFormNama(e.target.value)}
                  placeholder="Masukkan Nama/Deskripsi Utama"
                  className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Keterangan
                </label>
                <textarea
                  rows={3}
                  value={formKeterangan}
                  onChange={(e) => setFormKeterangan(e.target.value)}
                  placeholder="Keterangan tambahan..."
                  className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm bg-white"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 rounded text-xs font-bold text-slate-500 hover:bg-slate-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-bold cursor-pointer"
                >
                  Simpan
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const FileUploadField = ({
  label,
  value,
  onChange,
  id,
}: {
  label: string;
  value: string | null;
  onChange: (fileName: string | null) => void;
  id: string;
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-slate-50 p-2 rounded border border-slate-100">
      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
        {label}
      </label>
      {value ? (
        <div className="flex items-center justify-between p-1.5 border border-emerald-200 bg-emerald-50 rounded text-xs text-emerald-800">
          <div className="flex items-center gap-1.5 truncate">
            <FileText className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate font-medium text-[11px]">{value}</span>
          </div>
          <button
            type="button"
            onClick={() => onChange(null)}
            className="text-rose-600 hover:text-rose-800 font-bold ml-1.5 text-[10px] shrink-0 cursor-pointer"
          >
            Hapus
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center py-2 px-3 border border-dashed border-slate-200 hover:border-indigo-300 rounded cursor-pointer hover:bg-indigo-50/10 transition-all text-center">
          <Upload className="w-3.5 h-3.5 text-slate-400 mb-1" />
          <span className="text-[9px] text-slate-500 font-medium">Upload PDF</span>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id={id}
          />
        </label>
      )}
    </div>
  );
};

const PegawaiView = ({
  pegawaiList,
  onAddPegawai,
  onEditPegawai,
  onDeletePegawai,
  masterDataStore,
  theme = "indigo",
}: {
  pegawaiList: any[];
  onAddPegawai: (item: any) => void;
  onEditPegawai: (index: number, item: any) => void;
  onDeletePegawai: (index: number) => void;
  masterDataStore: any;
  theme?: string;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRuang, setFilterRuang] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [selectedPegawai, setSelectedPegawai] = useState<any>(null);
  const [activeFormTab, setActiveFormTab] = useState(1);

  // Helper date-to-text calculations
  const getAgeText = (birthDateStr: string) => {
    if (!birthDateStr) return "-";
    const birthDate = new Date(birthDateStr);
    if (isNaN(birthDate.getTime())) return "-";
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 0 ? `${age} Tahun` : "-";
  };

  const getTenureText = (tmtStr: string) => {
    if (!tmtStr) return "-";
    const tmtDate = new Date(tmtStr);
    if (isNaN(tmtDate.getTime())) return "-";
    const today = new Date();
    let years = today.getFullYear() - tmtDate.getFullYear();
    let months = today.getMonth() - tmtDate.getMonth();
    
    if (months < 0 || (months === 0 && today.getDate() < tmtDate.getDate())) {
      years--;
      months += 12;
    }
    if (today.getDate() < tmtDate.getDate()) {
      months--;
      if (months < 0) {
        months += 12;
        years--;
      }
    }
    if (years < 0) return "-";
    return `${years} Tahun ${months} Bulan`;
  };

  // Form State
  const initialFormState = {
    nip: "",
    nik: "",
    nama: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    umur: "",
    jenis_kelamin: "L",
    agama: "AG-01",
    kewarganegaraan: "WNI",
    alamat: "",
    no_kk: "",
    ktp_pdf: null as string | null,
    kk_pdf: null as string | null,
    pangkat_golongan: "III/a",
    jabatan: "JAB-03",
    ruangan_unit: "RU-UM",
    status_pegawai: "ST-01",
    tipe_jabatan: "TJ-FUN",
    eselon_jenjang: "NON-ES",
    kategori_sdmk: "KAT-MED",
    rumpun_sdmk: "RMP-MED",
    sub_rumpun_sdmk: "SRMP-01",
    sub_kategori_sdmk: "SUBK-01",
    group_status_sdmk: "GRP-01",
    status_kepegawaian: "ST-PNS",
    jenis_sdmk: "JSD-01",
    tmt_rs: "",
    tmt_cpns: "",
    tmt_pns: "",
    tmt_p3k: "",
    tmt_p3k_pw: "",
    sk_pdf_non_asn: null as string | null,
    sk_pdf_cpns: null as string | null,
    sk_pdf_pns: null as string | null,
    sk_pdf_p3k: null as string | null,
    sk_pdf_p3k_pw: null as string | null,
    sk_pdf_rs: null as string | null,
    edu_nama_sekolah: "",
    edu_jenjang: "S1",
    edu_prodi: "",
    edu_no_ijazah: "",
    edu_tahun_lulus: "",
    edu_pdf: null as string | null,
    profesi_nama_sekolah: "",
    profesi_jenjang: "S1",
    profesi_prodi: "",
    profesi_no_ijazah: "",
    profesi_tahun_lulus: "",
    profesi_pdf: null as string | null,
    profesi_jenis: "PROF-01",
    profesi_no_str: "",
    profesi_tgl_berlaku: "",
    profesi_tgl_kadaluarsa: "",
    profesi_is_seumur_hidup: false,
    profesi_no_sip: "",
    profesi_tgl_sip: "",
    profesi_tgl_kadaluarsa_sip: "",
    profesi_pdf_str_sip: null as string | null,
    nikah_no_buku: "",
    nikah_no_kutipan: "",
    nikah_tgl: "",
    nikah_tempat: "",
    nikah_pdf: null as string | null,
    jumlah_anak: 0,
    anak: [
      { nama: "", tgl_lahir: "" },
      { nama: "", tgl_lahir: "" },
      { nama: "", tgl_lahir: "" },
    ],
    email: "",
    no_telp: "",
    darurat_nama: "",
    darurat_hubungan: "",
    darurat_no_telp: "",
    ptkp_pajak: "TK/0",
    npwp: "",
    no_jkn_kis: "",
    no_jamsostek: "",
    no_rekening: "",
    npwp_pdf: null as string | null,
    bank_pdf: null as string | null,
  };

  const [formState, setFormState] = useState(initialFormState);

  const filteredPegawai = pegawaiList.filter((item) => {
    const matchesSearch =
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nip.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nik.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRuang = filterRuang === "ALL" || item.ruangan_unit === filterRuang;
    return matchesSearch && matchesRuang;
  });

  const getMasterLabel = (category: string, code: string) => {
    if (!code) return "-";
    const items = masterDataStore[category]?.items || [];
    const found = items.find((i: any) => i.kode === code);
    return found ? found.nama : code;
  };

  const openAddModal = () => {
    setEditingIndex(null);
    setFormState(initialFormState);
    setActiveFormTab(1);
    setIsModalOpen(true);
  };

  const openEditModal = (index: number, item: any) => {
    setEditingIndex(index);
    // Ensure nested fields are initialized properly
    setFormState({
      ...initialFormState,
      ...item,
      anak: item.anak ? [...item.anak] : [
        { nama: "", tgl_lahir: "" },
        { nama: "", tgl_lahir: "" },
        { nama: "", tgl_lahir: "" },
      ],
    });
    setActiveFormTab(1);
    setIsModalOpen(true);
  };

  const openDetailModal = (item: any) => {
    setSelectedPegawai(item);
    setIsDetailOpen(true);
  };

  const handleChildChange = (idx: number, field: "nama" | "tgl_lahir", val: string) => {
    const nextAnak = [...formState.anak];
    nextAnak[idx] = { ...nextAnak[idx], [field]: val };
    setFormState((prev) => ({ ...prev, anak: nextAnak }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.nip || !formState.nik || !formState.nama) {
      alert("Harap lengkapi field wajib: NIP, NIK, dan Nama.");
      return;
    }

    const payload = {
      ...formState,
      umur: getAgeText(formState.tanggal_lahir),
      lama_kerja_rs: getTenureText(formState.tmt_rs),
      lama_kerja_cpns: getTenureText(formState.tmt_cpns),
      lama_kerja_pns: getTenureText(formState.tmt_pns),
      lama_kerja_p3k: getTenureText(formState.tmt_p3k),
      lama_kerja_p3k_pw: getTenureText(formState.tmt_p3k_pw),
    };

    if (editingIndex !== null) {
      onEditPegawai(editingIndex, payload);
    } else {
      onAddPegawai(payload);
    }
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Manajemen Data Pegawai</h2>
          <p className="text-slate-500 text-sm mt-1">
            Kelola profil lengkap kepegawaian, masa kerja, berkas SK, pendidikan, STR/SIP, dan detail finansial.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-bold transition-colors shadow-sm flex items-center justify-center cursor-pointer"
        >
          <Plus className="w-4 h-4 mr-2" />
          Tambah Pegawai
        </button>
      </div>

      {/* Control & Filter Panel */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari NIP, NIK, atau Nama..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-1.5 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 w-full bg-slate-50"
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto justify-end">
          <span className="text-xs text-slate-400 self-center font-medium">Filter Ruang:</span>
          <select
            value={filterRuang}
            onChange={(e) => setFilterRuang(e.target.value)}
            className="px-3 py-1.5 border border-slate-200 rounded text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-300"
          >
            <option value="ALL">Semua Ruangan/Unit</option>
            {masterDataStore.ruangan_unit?.items.map((r: any) => (
              <option key={r.kode} value={r.kode}>
                {r.nama}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Employee List Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold border-b border-slate-200">
                <th className="px-4 py-3 whitespace-nowrap">NIP</th>
                <th className="px-4 py-3 whitespace-nowrap">NIK</th>
                <th className="px-4 py-3 whitespace-nowrap">Nama</th>
                <th className="px-4 py-3 whitespace-nowrap">Pangkat & Golongan Ruang</th>
                <th className="px-4 py-3 whitespace-nowrap">Jabatan</th>
                <th className="px-4 py-3 whitespace-nowrap">Ruang / Unit</th>
                <th className="px-4 py-3 text-right whitespace-nowrap">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50">
              {filteredPegawai.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold text-slate-600 whitespace-nowrap">
                    {row.nip}
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-500 whitespace-nowrap">
                    {row.nik}
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                    {row.nama}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-700">
                    <span className="px-2 py-0.5 bg-slate-100 rounded text-[11px] font-medium text-slate-600">
                      {getMasterLabel("pangkat_golongan", row.pangkat_golongan)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                    {getMasterLabel("jabatan", row.jabatan)}
                  </td>
                  <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[11px] font-semibold">
                      {getMasterLabel("ruangan_unit", row.ruangan_unit)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <button
                      onClick={() => openDetailModal(row)}
                      className="text-slate-600 hover:text-slate-900 font-bold text-xs mr-3 transition-colors cursor-pointer"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => openEditModal(rIdx, row)}
                      className="text-indigo-600 hover:text-indigo-800 font-bold text-xs mr-3 transition-colors cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeletePegawai(rIdx)}
                      className="text-rose-600 hover:text-rose-800 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {filteredPegawai.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500 font-medium">
                    Tidak ada data pegawai ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-white">
          <span>Menampilkan {filteredPegawai.length} dari {pegawaiList.length} pegawai</span>
          <div className="flex gap-1">
            <button className="px-2 py-1 border border-slate-200 rounded text-slate-400 bg-slate-50 text-[10px]" disabled>Prev</button>
            <button className="px-2.5 py-1 border border-slate-200 rounded text-slate-600 bg-white hover:bg-slate-50 text-[10px] font-bold">1</button>
            <button className="px-2 py-1 border border-slate-200 rounded text-slate-400 bg-slate-50 text-[10px]" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* VIEW DETAIL MODAL */}
      <AnimatePresence>
        {isDetailOpen && selectedPegawai && (
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-slate-100 flex flex-col"
            >
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-950 text-white">
                <div>
                  <h3 className="font-bold text-base">{selectedPegawai.nama}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">NIP: {selectedPegawai.nip} | NIK: {selectedPegawai.nik}</p>
                </div>
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="text-slate-400 hover:text-white cursor-pointer bg-slate-800 p-1.5 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 bg-slate-50/50">
                {/* 1. Identitas Diri Card */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Identitas Diri & Berkas</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">NIP & NIK</p>
                      <p className="font-mono mt-1 text-slate-900">{selectedPegawai.nip} / {selectedPegawai.nik}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">No. KK</p>
                      <p className="font-mono mt-1 text-slate-900">{selectedPegawai.no_kk || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Jenis Kelamin</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedPegawai.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Tempat, Tanggal Lahir</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedPegawai.tempat_lahir || "-"}, {selectedPegawai.tanggal_lahir || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Umur (Hitung Otomatis)</p>
                      <p className="font-bold mt-1 text-slate-900 bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded inline-block text-[11px]">
                        {getAgeText(selectedPegawai.tanggal_lahir)}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Agama & Kewarganegaraan</p>
                      <p className="font-medium mt-1 text-slate-900">{getMasterLabel("agama", selectedPegawai.agama)} / {selectedPegawai.kewarganegaraan}</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Alamat Lengkap</p>
                      <p className="font-medium mt-1 text-slate-900 bg-slate-50 p-2.5 rounded border border-slate-100">{selectedPegawai.alamat || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">PDF KTP</p>
                      {selectedPegawai.ktp_pdf ? (
                        <div className="mt-1.5 flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded border border-emerald-100 w-fit text-[11px] font-medium">
                          <FileText className="w-3.5 h-3.5" /> {selectedPegawai.ktp_pdf}
                        </div>
                      ) : <span className="text-slate-400 block mt-1">-</span>}
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">PDF KK</p>
                      {selectedPegawai.kk_pdf ? (
                        <div className="mt-1.5 flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded border border-emerald-100 w-fit text-[11px] font-medium">
                          <FileText className="w-3.5 h-3.5" /> {selectedPegawai.kk_pdf}
                        </div>
                      ) : <span className="text-slate-400 block mt-1">-</span>}
                    </div>
                  </div>
                </div>

                {/* 2. Struktur Jabatan & SDMK */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Struktur Jabatan & Tata Kelola SDMK</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Pangkat & Golongan</p>
                      <p className="font-semibold mt-1 text-slate-900 bg-slate-100 px-2 py-0.5 rounded inline-block">
                        {getMasterLabel("pangkat_golongan", selectedPegawai.pangkat_golongan)}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Jabatan Utama</p>
                      <p className="font-medium mt-1 text-slate-900">{getMasterLabel("jabatan", selectedPegawai.jabatan)}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Ruang / Unit Kerja</p>
                      <p className="font-semibold mt-1 text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded inline-block">
                        {getMasterLabel("ruangan_unit", selectedPegawai.ruangan_unit)}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Status Pegawai</p>
                      <p className="font-medium mt-1 text-slate-900">{getMasterLabel("status_pegawai", selectedPegawai.status_pegawai)}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Tipe Jabatan & Eselon</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedPegawai.tipe_jabatan === "TJ-STR" ? "Struktural" : "Fungsional"} / {selectedPegawai.eselon_jenjang}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Kategori & Rumpun SDMK</p>
                      <p className="font-medium mt-1 text-slate-900">{getMasterLabel("kategori_sdmk", selectedPegawai.kategori_sdmk)} / {getMasterLabel("rumpun_sdmk", selectedPegawai.rumpun_sdmk)}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Sub Rumpun & Sub Kategori</p>
                      <p className="font-medium mt-1 text-slate-900">{getMasterLabel("sub_rumpun_sdmk", selectedPegawai.sub_rumpun_sdmk)} / {getMasterLabel("sub_kategori_sdmk", selectedPegawai.sub_kategori_sdmk)}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Group Status & Status Kepeg.</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedPegawai.group_status_sdmk || "-"} / {selectedPegawai.status_kepegawaian}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Jenis SDMK</p>
                      <p className="font-medium mt-1 text-slate-900">{getMasterLabel("jenis_sdmk", selectedPegawai.jenis_sdmk)}</p>
                    </div>
                  </div>
                </div>

                {/* 3. Masa Kerja & Berkas SK */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <CalendarDays className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">TMT Kepegawaian & Berkas SK</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-xs">
                    <div className="border border-slate-100 rounded-lg p-3 space-y-3 bg-slate-50/30">
                      <p className="font-bold text-[11px] text-slate-500 uppercase border-b border-slate-100 pb-1">Tanggal Terhitung Mulai Tanggal (TMT)</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-slate-400 text-[10px]">TMT Rumah Sakit</p>
                          <p className="font-semibold text-slate-900">{selectedPegawai.tmt_rs || "-"}</p>
                          <p className="text-[10px] text-indigo-600 font-bold mt-0.5">Lama: {getTenureText(selectedPegawai.tmt_rs)}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">TMT CPNS</p>
                          <p className="font-semibold text-slate-900">{selectedPegawai.tmt_cpns || "-"}</p>
                          <p className="text-[10px] text-indigo-600 font-bold mt-0.5">Lama: {getTenureText(selectedPegawai.tmt_cpns)}</p>
                        </div>
                        <div className="mt-1">
                          <p className="text-slate-400 text-[10px]">TMT PNS</p>
                          <p className="font-semibold text-slate-900">{selectedPegawai.tmt_pns || "-"}</p>
                          <p className="text-[10px] text-indigo-600 font-bold mt-0.5">Lama: {getTenureText(selectedPegawai.tmt_pns)}</p>
                        </div>
                        <div className="mt-1">
                          <p className="text-slate-400 text-[10px]">TMT PPPK / P3K PW</p>
                          <p className="font-semibold text-slate-900">{selectedPegawai.tmt_p3k || "-"} / {selectedPegawai.tmt_p3k_pw || "-"}</p>
                          <p className="text-[10px] text-indigo-600 font-bold mt-0.5">PPPK: {getTenureText(selectedPegawai.tmt_p3k)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-slate-100 rounded-lg p-3 space-y-2 bg-slate-50/30">
                      <p className="font-bold text-[11px] text-slate-500 uppercase border-b border-slate-100 pb-1">Arsip SK Digital (PDF)</p>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <p className="text-slate-400 text-[9px] font-semibold">SK CPNS / PNS</p>
                          <span className="block truncate font-medium text-slate-700">{selectedPegawai.sk_pdf_cpns || "-"}</span>
                          <span className="block truncate font-medium text-slate-700">{selectedPegawai.sk_pdf_pns || "-"}</span>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[9px] font-semibold">SK PPPK / PW</p>
                          <span className="block truncate font-medium text-slate-700">{selectedPegawai.sk_pdf_p3k || "-"}</span>
                          <span className="block truncate font-medium text-slate-700">{selectedPegawai.sk_pdf_p3k_pw || "-"}</span>
                        </div>
                        <div className="col-span-2 pt-1 border-t border-slate-100">
                          <p className="text-slate-400 text-[9px] font-semibold">SK Rumah Sakit & SK Non ASN</p>
                          <div className="flex gap-4">
                            <span className="block truncate font-medium text-slate-700">RS: {selectedPegawai.sk_pdf_rs || "-"}</span>
                            <span className="block truncate font-medium text-slate-700">Non ASN: {selectedPegawai.sk_pdf_non_asn || "-"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Pendidikan, Profesi, STR & SIP */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Pendidikan, Profesi & Legalitas STR / SIP</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                    {/* Pendidikan Terakhir */}
                    <div className="bg-slate-50/50 p-3 rounded-lg border border-slate-100 space-y-2">
                      <p className="font-bold text-[10px] text-slate-500 uppercase border-b border-slate-200 pb-1 flex items-center justify-between">
                        <span>Pendidikan Umum</span>
                        {selectedPegawai.edu_pdf && <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 rounded">PDF Tersedia</span>}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="col-span-2">
                          <p className="text-slate-400 text-[10px]">Nama Sekolah/Universitas</p>
                          <p className="font-semibold text-slate-900">{selectedPegawai.edu_nama_sekolah || "-"}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">Jenjang & Prodi</p>
                          <p className="font-medium text-slate-900">{selectedPegawai.edu_jenjang || "-"} - {selectedPegawai.edu_prodi || "-"}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">No. Ijazah & Tahun Lulus</p>
                          <p className="font-medium text-slate-900">{selectedPegawai.edu_no_ijazah || "-"} ({selectedPegawai.edu_tahun_lulus || "-"})</p>
                        </div>
                      </div>
                    </div>

                    {/* Pendidikan Spesialis & Profesi */}
                    <div className="bg-slate-50/50 p-3 rounded-lg border border-slate-100 space-y-2">
                      <p className="font-bold text-[10px] text-slate-500 uppercase border-b border-slate-200 pb-1 flex items-center justify-between">
                        <span>Pendidikan Profesi</span>
                        {selectedPegawai.profesi_pdf && <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 rounded">PDF Tersedia</span>}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="col-span-2">
                          <p className="text-slate-400 text-[10px]">Nama Institusi Profesi</p>
                          <p className="font-semibold text-slate-900">{selectedPegawai.profesi_nama_sekolah || "-"}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">Jenjang, Prodi & Profesi</p>
                          <p className="font-medium text-slate-900">{selectedPegawai.profesi_jenjang || "-"} - {selectedPegawai.profesi_prodi || "-"} ({getMasterLabel("jenis_profesi", selectedPegawai.profesi_jenis)})</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">No. Ijazah Profesi</p>
                          <p className="font-medium text-slate-900">{selectedPegawai.profesi_no_ijazah || "-"} ({selectedPegawai.profesi_tahun_lulus || "-"})</p>
                        </div>
                      </div>
                    </div>

                    {/* STR & SIP Data */}
                    <div className="md:col-span-2 bg-slate-50/50 p-3 rounded-lg border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-[10px] text-slate-500 uppercase border-b border-slate-200 pb-1">REGISTRASI STR (Surat Tanda Registrasi)</p>
                        <div className="mt-2 space-y-1.5 text-xs">
                          <p><span className="text-slate-400">Nomor STR:</span> <span className="font-semibold font-mono text-slate-900">{selectedPegawai.profesi_no_str || "-"}</span></p>
                          <p><span className="text-slate-400">Tanggal Berlaku:</span> <span className="font-medium text-slate-800">{selectedPegawai.profesi_tgl_berlaku || "-"}</span></p>
                          <p><span className="text-slate-400">Tanggal Kadaluarsa:</span> <span className="font-bold text-slate-800">
                            {selectedPegawai.profesi_is_seumur_hidup ? (
                              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-semibold">SEUMUR HIDUP</span>
                            ) : selectedPegawai.profesi_tgl_kadaluarsa || "-"}
                          </span></p>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-[10px] text-slate-500 uppercase border-b border-slate-200 pb-1">SIP (Surat Izin Praktik)</p>
                        <div className="mt-2 space-y-1.5 text-xs">
                          <p><span className="text-slate-400">Nomor SIP:</span> <span className="font-semibold font-mono text-slate-900">{selectedPegawai.profesi_no_sip || "-"}</span></p>
                          <p><span className="text-slate-400">Tanggal SIP:</span> <span className="font-medium text-slate-800">{selectedPegawai.profesi_tgl_sip || "-"}</span></p>
                          <p><span className="text-slate-400">Kadaluarsa SIP:</span> <span className="font-medium text-slate-800">{selectedPegawai.profesi_tgl_kadaluarsa_sip || "-"}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Data Keluarga */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Heart className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Pernikahan & Data Anak</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">No. Akta / Buku Nikah</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedPegawai.nikah_no_buku || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">No. Kutipan Akta</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedPegawai.nikah_no_kutipan || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Tempat & Tanggal Nikah</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedPegawai.nikah_tempat || "-"}, {selectedPegawai.nikah_tgl || "-"}</p>
                    </div>
                    
                    <div className="md:col-span-3 border-t border-slate-100 pt-3">
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-2">Daftar Anak (Jumlah Anak: {selectedPegawai.jumlah_anak || 0})</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {selectedPegawai.anak?.slice(0, 3).map((a: any, i: number) => a.nama ? (
                          <div key={i} className="p-2.5 border border-slate-100 bg-slate-50/50 rounded-lg flex items-start gap-2">
                            <Baby className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-slate-800 text-xs">{a.nama}</p>
                              <p className="text-[10px] text-slate-500 mt-0.5">Tgl Lahir: {a.tgl_lahir || "-"}</p>
                            </div>
                          </div>
                        ) : null)}
                        {(!selectedPegawai.anak || selectedPegawai.anak.filter((a:any)=>a.nama).length === 0) && (
                          <span className="text-slate-400 text-xs">Belum ada data anak diinput.</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Kontak, Finansial & Jaminan */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <DollarSign className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Kontak, Finansial & Jaminan BPJS/NPWP</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                    <div className="space-y-3">
                      <p className="font-bold text-[10px] text-slate-500 uppercase border-b border-slate-100 pb-1">Kontak Pribadi & Darurat</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-slate-400 text-[10px]">Email</p>
                          <p className="font-medium text-slate-900">{selectedPegawai.email || "-"}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">Telp / Whatsapp</p>
                          <p className="font-medium text-slate-900 font-mono">{selectedPegawai.no_telp || "-"}</p>
                        </div>
                        <div className="col-span-2 pt-1">
                          <p className="text-slate-400 text-[10px]">Kontak Darurat</p>
                          <p className="font-semibold text-slate-900">{selectedPegawai.darurat_nama || "-"} ({selectedPegawai.darurat_hubungan || "-"})</p>
                          <p className="text-[10px] text-slate-500 font-mono mt-0.5">No: {selectedPegawai.darurat_no_telp || "-"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="font-bold text-[10px] text-slate-500 uppercase border-b border-slate-100 pb-1">Perpajakan & Tabungan Bank</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-slate-400 text-[10px]">PTKP & NPWP</p>
                          <p className="font-medium text-slate-900">{selectedPegawai.ptkp_pajak || "-"} / {selectedPegawai.npwp || "-"}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">No. JKN-KIS / Jamsostek</p>
                          <p className="font-medium text-slate-900">{selectedPegawai.no_jkn_kis || "-"} / {selectedPegawai.no_jamsostek || "-"}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-slate-400 text-[10px]">Nomor Rekening Tabungan Bank</p>
                          <p className="font-bold text-slate-900 font-mono">{selectedPegawai.no_rekening || "-"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-bold cursor-pointer transition-colors shadow-xs"
                >
                  Tutup Detail
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ADD / EDIT WIZARD FORM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-slate-100 flex flex-col"
            >
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-950 text-sm">
                    {editingIndex !== null ? "Edit Data Profil Pegawai" : "Tambah Pegawai Baru"}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Lengkapi formulir terstruktur kepegawaian Anda di bawah ini.</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 cursor-pointer p-1.5 rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Wizard Form Tabs Header */}
              <div className="border-b border-slate-100 bg-slate-50 px-4 flex gap-1 overflow-x-auto no-scrollbar py-1">
                {[
                  { id: 1, label: "1. Identitas Diri" },
                  { id: 2, label: "2. Jabatan & SDMK" },
                  { id: 3, label: "3. TMT & Berkas SK" },
                  { id: 4, label: "4. Pendidikan & STR" },
                  { id: 5, label: "5. Pernikahan & Anak" },
                  { id: 6, label: "6. Kontak & Finansial" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveFormTab(t.id)}
                    className={`px-3 py-2 text-[11px] font-bold whitespace-nowrap rounded-t-lg transition-all border-b-2 ${
                      activeFormTab === t.id
                        ? "border-slate-900 text-slate-900 bg-white shadow-xs"
                        : "border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-100/50"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* TAB 1: IDENTITAS DIRI */}
                {activeFormTab === 1 && (
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">Identitas Kependudukan & Personal</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">NIP (Nomor Induk Pegawai) *</label>
                        <input
                          type="text"
                          required
                          value={formState.nip}
                          onChange={(e) => setFormState({ ...formState, nip: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">NIK (Nomor Induk Kependudukan) *</label>
                        <input
                          type="text"
                          required
                          value={formState.nik}
                          onChange={(e) => setFormState({ ...formState, nik: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nama Lengkap *</label>
                        <input
                          type="text"
                          required
                          value={formState.nama}
                          onChange={(e) => setFormState({ ...formState, nama: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tempat Lahir</label>
                        <input
                          type="text"
                          value={formState.tempat_lahir}
                          onChange={(e) => setFormState({ ...formState, tempat_lahir: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tanggal Lahir</label>
                        <input
                          type="date"
                          value={formState.tanggal_lahir}
                          onChange={(e) => setFormState({ ...formState, tanggal_lahir: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Umur (Hitung Otomatis)</label>
                        <input
                          type="text"
                          disabled
                          value={getAgeText(formState.tanggal_lahir)}
                          className="w-full px-3 py-2 border border-slate-200 rounded text-xs bg-slate-50 font-bold text-slate-700"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Jenis Kelamin</label>
                        <select
                          value={formState.jenis_kelamin}
                          onChange={(e) => setFormState({ ...formState, jenis_kelamin: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          <option value="L">Laki-laki</option>
                          <option value="P">Perempuan</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Agama</label>
                        <select
                          value={formState.agama}
                          onChange={(e) => setFormState({ ...formState, agama: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.agama?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Kewarganegaraan</label>
                        <select
                          value={formState.kewarganegaraan}
                          onChange={(e) => setFormState({ ...formState, kewarganegaraan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.kewarganegaraan?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Alamat Lengkap</label>
                        <textarea
                          rows={2}
                          value={formState.alamat}
                          onChange={(e) => setFormState({ ...formState, alamat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor Kartu Keluarga (KK)</label>
                        <input
                          type="text"
                          value={formState.no_kk}
                          onChange={(e) => setFormState({ ...formState, no_kk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <FileUploadField
                        label="Upload PDF KTP"
                        value={formState.ktp_pdf}
                        onChange={(fn) => setFormState({ ...formState, ktp_pdf: fn })}
                        id="ktp-pdf"
                      />
                      <FileUploadField
                        label="Upload PDF KK"
                        value={formState.kk_pdf}
                        onChange={(fn) => setFormState({ ...formState, kk_pdf: fn })}
                        id="kk-pdf"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: JABATAN & TATA KELOLA SDMK */}
                {activeFormTab === 2 && (
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">Tata Kelola Jabatan & SDMK</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Pangkat & Golongan Ruang</label>
                        <select
                          value={formState.pangkat_golongan}
                          onChange={(e) => setFormState({ ...formState, pangkat_golongan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.pangkat_golongan?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Jabatan Utama</label>
                        <select
                          value={formState.jabatan}
                          onChange={(e) => setFormState({ ...formState, jabatan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.jabatan?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Ruangan / Unit Kerja</label>
                        <select
                          value={formState.ruangan_unit}
                          onChange={(e) => setFormState({ ...formState, ruangan_unit: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.ruangan_unit?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Status Pegawai</label>
                        <select
                          value={formState.status_pegawai}
                          onChange={(e) => setFormState({ ...formState, status_pegawai: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.status_pegawai?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tipe Jabatan</label>
                        <select
                          value={formState.tipe_jabatan}
                          onChange={(e) => setFormState({ ...formState, tipe_jabatan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          <option value="TJ-FUN">Fungsional</option>
                          <option value="TJ-STR">Struktural</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Eselon / Jenjang</label>
                        <input
                          type="text"
                          value={formState.eselon_jenjang}
                          placeholder="Misal: IV/a atau NON-ES"
                          onChange={(e) => setFormState({ ...formState, eselon_jenjang: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Kategori SDMK</label>
                        <select
                          value={formState.kategori_sdmk}
                          onChange={(e) => setFormState({ ...formState, kategori_sdmk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.kategori_sdmk?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Rumpun SDMK</label>
                        <select
                          value={formState.rumpun_sdmk}
                          onChange={(e) => setFormState({ ...formState, rumpun_sdmk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.rumpun_sdmk?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Sub Rumpun SDMK</label>
                        <select
                          value={formState.sub_rumpun_sdmk}
                          onChange={(e) => setFormState({ ...formState, sub_rumpun_sdmk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.sub_rumpun_sdmk?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Sub Kategori SDMK</label>
                        <select
                          value={formState.sub_kategori_sdmk}
                          onChange={(e) => setFormState({ ...formState, sub_kategori_sdmk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.sub_kategori_sdmk?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Group Status Kepegawaian</label>
                        <input
                          type="text"
                          value={formState.group_status_sdmk}
                          placeholder="PNS / PPPK / Non ASN"
                          onChange={(e) => setFormState({ ...formState, group_status_sdmk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Status Kepegawaian</label>
                        <input
                          type="text"
                          value={formState.status_kepegawaian}
                          placeholder="PNS Daerah / Pusat"
                          onChange={(e) => setFormState({ ...formState, status_kepegawaian: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Jenis SDMK</label>
                        <select
                          value={formState.jenis_sdmk}
                          onChange={(e) => setFormState({ ...formState, jenis_sdmk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                        >
                          {masterDataStore.jenis_sdmk?.items.map((i: any) => (
                            <option key={i.kode} value={i.kode}>{i.nama}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: TMT & LAMA KERJA & FILE SK */}
                {activeFormTab === 3 && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 mb-3">TMT (Terhitung Mulai Tanggal) & Hitung Lama Kerja Otomatis</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">TMT Rumah Sakit</label>
                          <input
                            type="date"
                            value={formState.tmt_rs}
                            onChange={(e) => setFormState({ ...formState, tmt_rs: e.target.value })}
                            className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                          />
                          <p className="text-[10px] text-indigo-600 font-bold mt-1">Lama Kerja: {getTenureText(formState.tmt_rs)}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">TMT CPNS</label>
                          <input
                            type="date"
                            value={formState.tmt_cpns}
                            onChange={(e) => setFormState({ ...formState, tmt_cpns: e.target.value })}
                            className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                          />
                          <p className="text-[10px] text-indigo-600 font-bold mt-1">Lama CPNS: {getTenureText(formState.tmt_cpns)}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">TMT PNS</label>
                          <input
                            type="date"
                            value={formState.tmt_pns}
                            onChange={(e) => setFormState({ ...formState, tmt_pns: e.target.value })}
                            className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                          />
                          <p className="text-[10px] text-indigo-600 font-bold mt-1">Lama PNS: {getTenureText(formState.tmt_pns)}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">TMT PPPK / P3K</label>
                          <input
                            type="date"
                            value={formState.tmt_p3k}
                            onChange={(e) => setFormState({ ...formState, tmt_p3k: e.target.value })}
                            className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                          />
                          <p className="text-[10px] text-indigo-600 font-bold mt-1">Lama P3K: {getTenureText(formState.tmt_p3k)}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">TMT P3K PW</label>
                          <input
                            type="date"
                            value={formState.tmt_p3k_pw}
                            onChange={(e) => setFormState({ ...formState, tmt_p3k_pw: e.target.value })}
                            className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                          />
                          <p className="text-[10px] text-indigo-600 font-bold mt-1">Lama P3K PW: {getTenureText(formState.tmt_p3k_pw)}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 mb-3">Upload PDF SK Digital Pegawai</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <FileUploadField
                          label="SK Non ASN (PDF)"
                          value={formState.sk_pdf_non_asn}
                          onChange={(fn) => setFormState({ ...formState, sk_pdf_non_asn: fn })}
                          id="sk-non-asn"
                        />
                        <FileUploadField
                          label="SK CPNS (PDF)"
                          value={formState.sk_pdf_cpns}
                          onChange={(fn) => setFormState({ ...formState, sk_pdf_cpns: fn })}
                          id="sk-cpns"
                        />
                        <FileUploadField
                          label="SK PNS (PDF)"
                          value={formState.sk_pdf_pns}
                          onChange={(fn) => setFormState({ ...formState, sk_pdf_pns: fn })}
                          id="sk-pns"
                        />
                        <FileUploadField
                          label="SK P3K (PDF)"
                          value={formState.sk_pdf_p3k}
                          onChange={(fn) => setFormState({ ...formState, sk_pdf_p3k: fn })}
                          id="sk-p3k"
                        />
                        <FileUploadField
                          label="SK P3K PW (PDF)"
                          value={formState.sk_pdf_p3k_pw}
                          onChange={(fn) => setFormState({ ...formState, sk_pdf_p3k_pw: fn })}
                          id="sk-p3k-pw"
                        />
                        <FileUploadField
                          label="SK Rumah Sakit (PDF)"
                          value={formState.sk_pdf_rs}
                          onChange={(fn) => setFormState({ ...formState, sk_pdf_rs: fn })}
                          id="sk-rs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: PENDIDIKAN, PROFESI, STR & SIP */}
                {activeFormTab === 4 && (
                  <div className="space-y-6">
                    {/* Pendidikan Umum */}
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 mb-3">Pendidikan Umum Terakhir</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nama Sekolah / Perguruan Tinggi</label>
                          <input
                            type="text"
                            value={formState.edu_nama_sekolah}
                            onChange={(e) => setFormState({ ...formState, edu_nama_sekolah: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Jenjang Pendidikan</label>
                          <select
                            value={formState.edu_jenjang}
                            onChange={(e) => setFormState({ ...formState, edu_jenjang: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          >
                            {masterDataStore.jenjang_pendidikan?.items.map((i: any) => (
                              <option key={i.kode} value={i.kode}>{i.nama}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Program Studi</label>
                          <input
                            type="text"
                            value={formState.edu_prodi}
                            onChange={(e) => setFormState({ ...formState, edu_prodi: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor Ijazah</label>
                          <input
                            type="text"
                            value={formState.edu_no_ijazah}
                            onChange={(e) => setFormState({ ...formState, edu_no_ijazah: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tahun Lulus</label>
                          <input
                            type="text"
                            value={formState.edu_tahun_lulus}
                            onChange={(e) => setFormState({ ...formState, edu_tahun_lulus: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div className="md:col-span-3">
                          <FileUploadField
                            label="Upload PDF Ijazah"
                            value={formState.edu_pdf}
                            onChange={(fn) => setFormState({ ...formState, edu_pdf: fn })}
                            id="edu-pdf"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Profesi & Sertifikasi */}
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 mb-3">Pendidikan Profesi & Sertifikasi Kompetensi</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nama Sekolah / PT Profesi</label>
                          <input
                            type="text"
                            value={formState.profesi_nama_sekolah}
                            onChange={(e) => setFormState({ ...formState, profesi_nama_sekolah: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Jenjang Profesi</label>
                          <select
                            value={formState.profesi_jenjang}
                            onChange={(e) => setFormState({ ...formState, profesi_jenjang: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          >
                            {masterDataStore.jenjang_pendidikan?.items.map((i: any) => (
                              <option key={i.kode} value={i.kode}>{i.nama}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Program Studi Profesi</label>
                          <input
                            type="text"
                            value={formState.profesi_prodi}
                            onChange={(e) => setFormState({ ...formState, profesi_prodi: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor Ijazah Profesi</label>
                          <input
                            type="text"
                            value={formState.profesi_no_ijazah}
                            onChange={(e) => setFormState({ ...formState, profesi_no_ijazah: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tahun Lulus Profesi</label>
                          <input
                            type="text"
                            value={formState.profesi_tahun_lulus}
                            onChange={(e) => setFormState({ ...formState, profesi_tahun_lulus: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div className="md:col-span-3">
                          <FileUploadField
                            label="Upload PDF Ijazah Profesi"
                            value={formState.profesi_pdf}
                            onChange={(fn) => setFormState({ ...formState, profesi_pdf: fn })}
                            id="prof-pdf"
                          />
                        </div>
                        
                        <div className="md:col-span-3 border-t border-slate-100 pt-3">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Jenis Profesi</label>
                          <select
                            value={formState.profesi_jenis}
                            onChange={(e) => setFormState({ ...formState, profesi_jenis: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          >
                            {masterDataStore.jenis_profesi?.items.map((i: any) => (
                              <option key={i.kode} value={i.kode}>{i.nama}</option>
                            ))}
                          </select>
                        </div>

                        {/* STR & SIP Grid */}
                        <div className="md:col-span-3 bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-4">
                          <p className="font-bold text-[11px] text-slate-600 uppercase">STR (Surat Tanda Registrasi) & SIP (Surat Izin Praktik)</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Nomor STR</label>
                              <input
                                type="text"
                                value={formState.profesi_no_str}
                                onChange={(e) => setFormState({ ...formState, profesi_no_str: e.target.value })}
                                className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Tanggal Berlaku STR</label>
                              <input
                                type="date"
                                value={formState.profesi_tgl_berlaku}
                                onChange={(e) => setFormState({ ...formState, profesi_tgl_berlaku: e.target.value })}
                                className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                              />
                            </div>
                            <div className="flex flex-col justify-end">
                              <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer mb-2">
                                <input
                                  type="checkbox"
                                  checked={formState.profesi_is_seumur_hidup}
                                  onChange={(e) => setFormState({ ...formState, profesi_is_seumur_hidup: e.target.checked })}
                                  className="rounded text-indigo-600 border-slate-300 focus:ring-indigo-500"
                                />
                                <span className="font-bold text-[11px] uppercase tracking-wider text-indigo-700">STR Seumur Hidup</span>
                              </label>
                              {!formState.profesi_is_seumur_hidup && (
                                <div>
                                  <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Tanggal Kadaluarsa STR</label>
                                  <input
                                    type="date"
                                    value={formState.profesi_tgl_kadaluarsa}
                                    onChange={(e) => setFormState({ ...formState, profesi_tgl_kadaluarsa: e.target.value })}
                                    className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                                  />
                                </div>
                              )}
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Nomor SIP</label>
                              <input
                                type="text"
                                value={formState.profesi_no_sip}
                                onChange={(e) => setFormState({ ...formState, profesi_no_sip: e.target.value })}
                                className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Tanggal SIP</label>
                              <input
                                type="date"
                                value={formState.profesi_tgl_sip}
                                onChange={(e) => setFormState({ ...formState, profesi_tgl_sip: e.target.value })}
                                className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Tanggal Kadaluarsa SIP</label>
                              <input
                                type="date"
                                value={formState.profesi_tgl_kadaluarsa_sip}
                                onChange={(e) => setFormState({ ...formState, profesi_tgl_kadaluarsa_sip: e.target.value })}
                                className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                              />
                            </div>

                            <div className="md:col-span-3">
                              <FileUploadField
                                label="Upload PDF STR & PDF SIP"
                                value={formState.profesi_pdf_str_sip}
                                onChange={(fn) => setFormState({ ...formState, profesi_pdf_str_sip: fn })}
                                id="str-sip-pdf"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: PERNIKAHAN & DATA ANAK */}
                {activeFormTab === 5 && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 mb-3">Pernikahan / Perkawinan Resmi</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor Akta / Buku Nikah</label>
                          <input
                            type="text"
                            value={formState.nikah_no_buku}
                            onChange={(e) => setFormState({ ...formState, nikah_no_buku: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor Kutipan Akta Nikah</label>
                          <input
                            type="text"
                            value={formState.nikah_no_kutipan}
                            onChange={(e) => setFormState({ ...formState, nikah_no_kutipan: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tanggal Nikah</label>
                          <input
                            type="date"
                            value={formState.nikah_tgl}
                            onChange={(e) => setFormState({ ...formState, nikah_tgl: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tempat Nikah</label>
                          <input
                            type="text"
                            value={formState.nikah_tempat}
                            onChange={(e) => setFormState({ ...formState, nikah_tempat: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <FileUploadField
                            label="Upload PDF Nikah"
                            value={formState.nikah_pdf}
                            onChange={(fn) => setFormState({ ...formState, nikah_pdf: fn })}
                            id="nikah-pdf"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 mb-3">Data Anak (Maksimal 3 Anak)</p>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Jumlah Anak</label>
                          <input
                            type="number"
                            min={0}
                            max={3}
                            value={formState.jumlah_anak}
                            onChange={(e) => setFormState({ ...formState, jumlah_anak: parseInt(e.target.value) || 0 })}
                            className="w-24 px-3 py-2 border border-slate-200 rounded text-xs bg-white"
                          />
                        </div>

                        {formState.jumlah_anak > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[...Array(Math.min(formState.jumlah_anak, 3))].map((_, idx) => (
                              <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-3">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Anak Ke-{idx + 1}</p>
                                <div>
                                  <label className="block text-[10px] font-semibold text-slate-400 mb-1">Nama Lengkap Anak</label>
                                  <input
                                    type="text"
                                    required
                                    value={formState.anak[idx]?.nama || ""}
                                    onChange={(e) => handleChildChange(idx, "nama", e.target.value)}
                                    className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-semibold text-slate-400 mb-1">Tanggal Lahir Anak</label>
                                  <input
                                    type="date"
                                    required
                                    value={formState.anak[idx]?.tgl_lahir || ""}
                                    onChange={(e) => handleChildChange(idx, "tgl_lahir", e.target.value)}
                                    className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 6: KONTAK & FINANSIAL */}
                {activeFormTab === 6 && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 mb-3">Kontak Pribadi & Kontak Darurat</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Alamat Email</label>
                          <input
                            type="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor Telepon / WhatsApp</label>
                          <input
                            type="text"
                            value={formState.no_telp}
                            onChange={(e) => setFormState({ ...formState, no_telp: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div className="md:col-span-2 grid grid-cols-3 gap-4 bg-slate-50 p-3 rounded-lg border border-slate-150">
                          <div className="col-span-3">
                            <p className="text-[10px] font-bold text-slate-500 uppercase">Kontak Darurat</p>
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-1">Nama Kontak</label>
                            <input
                              type="text"
                              value={formState.darurat_nama}
                              onChange={(e) => setFormState({ ...formState, darurat_nama: e.target.value })}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-1">Hubungan</label>
                            <input
                              type="text"
                              value={formState.darurat_hubungan}
                              onChange={(e) => setFormState({ ...formState, darurat_hubungan: e.target.value })}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-1">Nomor Kontak</label>
                            <input
                              type="text"
                              value={formState.darurat_no_telp}
                              onChange={(e) => setFormState({ ...formState, darurat_no_telp: e.target.value })}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 mb-3">Finansial, Jaminan Kesehatan & Pajak</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">PTKP Pajak</label>
                          <select
                            value={formState.ptkp_pajak}
                            onChange={(e) => setFormState({ ...formState, ptkp_pajak: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          >
                            {masterDataStore.ptkp_pajak?.items.map((i: any) => (
                              <option key={i.kode} value={i.kode}>{i.nama}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor NPWP</label>
                          <input
                            type="text"
                            value={formState.npwp}
                            onChange={(e) => setFormState({ ...formState, npwp: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor Rekening Bank</label>
                          <input
                            type="text"
                            value={formState.no_rekening}
                            placeholder="Bank & No Rekening"
                            onChange={(e) => setFormState({ ...formState, no_rekening: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor JKN-KIS</label>
                          <input
                            type="text"
                            value={formState.no_jkn_kis}
                            onChange={(e) => setFormState({ ...formState, no_jkn_kis: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor Jamsostek</label>
                          <input
                            type="text"
                            value={formState.no_jamsostek}
                            onChange={(e) => setFormState({ ...formState, no_jamsostek: e.target.value })}
                            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-xs bg-white"
                          />
                        </div>
                        
                        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <FileUploadField
                            label="Upload PDF NPWP"
                            value={formState.npwp_pdf}
                            onChange={(fn) => setFormState({ ...formState, npwp_pdf: fn })}
                            id="npwp-pdf"
                          />
                          <FileUploadField
                            label="Upload PDF Bank (Buku Rekening)"
                            value={formState.bank_pdf}
                            onChange={(fn) => setFormState({ ...formState, bank_pdf: fn })}
                            id="bank-pdf"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              {/* Wizard Footer Controls */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
                <div className="flex gap-2">
                  {activeFormTab > 1 && (
                    <button
                      type="button"
                      onClick={() => setActiveFormTab((prev) => prev - 1)}
                      className="px-4 py-2 border border-slate-200 rounded text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 cursor-pointer"
                    >
                      Sebelumnya
                    </button>
                  )}
                  {activeFormTab < 6 && (
                    <button
                      type="button"
                      onClick={() => setActiveFormTab((prev) => prev + 1)}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-bold cursor-pointer"
                    >
                      Selanjutnya
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-200 rounded text-xs font-bold text-slate-500 hover:bg-slate-50 cursor-pointer"
                  >
                    Batal
                  </button>
                  {activeFormTab === 6 && (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-bold cursor-pointer shadow-sm"
                    >
                      Simpan Data Pegawai
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface NonPegawaiViewProps {
  nonPegawaiList: any[];
  onAddNonPegawai: (item: any) => void;
  onEditNonPegawai: (index: number, updatedItem: any) => void;
  onDeleteNonPegawai: (index: number) => void;
  masterDataStore: any;
  theme?: string;
}

const NonPegawaiView = ({
  nonPegawaiList,
  onAddNonPegawai,
  onEditNonPegawai,
  onDeleteNonPegawai,
  masterDataStore,
  theme = "indigo"
}: NonPegawaiViewProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [filterKepegawaian, setFilterKepegawaian] = useState("ALL");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [selectedNonPegawai, setSelectedNonPegawai] = useState<any | null>(null);

  const activeColors = THEMES[theme as keyof typeof THEMES] || THEMES.indigo;

  const initialFormState = {
    id: "",
    nik: "",
    nama: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "L",
    agama: "Islam",
    pendidikan_terakhir: "SMA/SMK",
    status_perkawinan: "Belum Kawin",
    alamat: "",
    no_hp_wa: "",
    email: "",
    jabatan_tugas: "",
    unit_kerja: "",
    status_kepegawaian: "Magang/PKL",
    tgl_mulai_kerja: "",
    tgl_selesai_kontrak: "",
    status_aktif: "Aktif",
    ket: ""
  };

  const [formState, setFormState] = useState(initialFormState);

  const filteredList = nonPegawaiList.filter((item) => {
    const matchesSearch =
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nik.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.jabatan_tugas || "").toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "ALL" || item.status_aktif === filterStatus;
    const matchesKepegawaian = filterKepegawaian === "ALL" || item.status_kepegawaian === filterKepegawaian;
    return matchesSearch && matchesStatus && matchesKepegawaian;
  });

  const openAddModal = () => {
    // Generate automatic non-pegawai ID
    const nextIdNum = nonPegawaiList.reduce((max, item) => {
      const num = parseInt(item.id.replace("NP-", ""));
      return isNaN(num) ? max : Math.max(max, num);
    }, 0) + 1;
    const autoID = `NP-${String(nextIdNum).padStart(3, '0')}`;

    setEditingIndex(null);
    setFormState({
      ...initialFormState,
      id: autoID
    });
    setIsModalOpen(true);
  };

  const openEditModal = (index: number, item: any) => {
    setEditingIndex(index);
    setFormState({
      ...initialFormState,
      ...item
    });
    setIsModalOpen(true);
  };

  const openDetailModal = (item: any) => {
    setSelectedNonPegawai(item);
    setIsDetailOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.nik || !formState.nama || !formState.jabatan_tugas) {
      alert("Harap lengkapi field wajib: NIK, Nama Lengkap, dan Jabatan/Tugas.");
      return;
    }

    if (editingIndex !== null) {
      onEditNonPegawai(editingIndex, formState);
    } else {
      onAddNonPegawai(formState);
    }
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Manajemen Data Non-Pegawai</h2>
          <p className="text-slate-500 text-sm mt-1">
            Kelola data magang, pihak ketiga/outsourcing, tenaga ahli, dan staf non-pegawai instansi.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className={`${activeColors.primary} ${activeColors.hover} text-white px-4 py-2 rounded text-xs font-bold transition-colors shadow-sm flex items-center justify-center cursor-pointer`}
        >
          <Plus className="w-4 h-4 mr-2" />
          Tambah Non-Pegawai
        </button>
      </div>

      {/* Control & Filter Panel */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari ID, NIK, Nama, Jabatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-1.5 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 w-full bg-slate-50"
          />
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto justify-end">
          <div className="flex gap-2 items-center">
            <span className="text-xs text-slate-400 font-medium">Kepegawaian:</span>
            <select
              value={filterKepegawaian}
              onChange={(e) => setFilterKepegawaian(e.target.value)}
              className="px-3 py-1.5 border border-slate-200 rounded text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-300"
            >
              <option value="ALL">Semua</option>
              <option value="Magang/PKL">Magang/PKL</option>
              <option value="Pihak Ketiga/Outsourcing">Pihak Ketiga/Outsourcing</option>
              <option value="Tenaga Ahli/Konsultan">Tenaga Ahli/Konsultan</option>
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xs text-slate-400 font-medium">Status Aktif:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-1.5 border border-slate-200 rounded text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-300"
            >
              <option value="ALL">Semua</option>
              <option value="Aktif">Aktif</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>
        </div>
      </div>

      {/* Non-Pegawai List Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold border-b border-slate-200">
                <th className="px-4 py-3 whitespace-nowrap">ID Non-Pegawai</th>
                <th className="px-4 py-3 whitespace-nowrap">NIK</th>
                <th className="px-4 py-3 whitespace-nowrap">Nama Lengkap</th>
                <th className="px-4 py-3 whitespace-nowrap">Jabatan / Tugas</th>
                <th className="px-4 py-3 whitespace-nowrap">Unit Kerja</th>
                <th className="px-4 py-3 whitespace-nowrap">Status Kepegawaian</th>
                <th className="px-4 py-3 whitespace-nowrap">Status Aktif</th>
                <th className="px-4 py-3 text-right whitespace-nowrap">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-slate-400 font-medium">
                    Tidak ada data non-pegawai yang ditemukan.
                  </td>
                </tr>
              ) : (
                filteredList.map((row, rIdx) => {
                  const itemIndex = nonPegawaiList.findIndex((x) => x.id === row.id);
                  return (
                    <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-slate-600 whitespace-nowrap">
                        {row.id}
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-500 whitespace-nowrap">
                        {row.nik}
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                        {row.nama}
                      </td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                        {row.jabatan_tugas || "-"}
                      </td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                        {row.unit_kerja || "-"}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded text-[11px] font-semibold">
                          {row.status_kepegawaian}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                          row.status_aktif === "Aktif"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        }`}>
                          {row.status_aktif}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right whitespace-nowrap space-x-2">
                        <button
                          onClick={() => openDetailModal(row)}
                          className="text-slate-600 hover:text-slate-900 font-bold text-xs transition-colors cursor-pointer"
                        >
                          Detail
                        </button>
                        <button
                          onClick={() => openEditModal(itemIndex, row)}
                          className="text-indigo-600 hover:text-indigo-800 font-bold text-xs transition-colors cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDeleteNonPegawai(itemIndex)}
                          className="text-rose-600 hover:text-rose-800 font-bold text-xs transition-colors cursor-pointer"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* DETAILED VIEW MODAL */}
      <AnimatePresence>
        {isDetailOpen && selectedNonPegawai && (
          <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-50 w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-white p-6 border-b border-slate-200 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${activeColors.bgLight} ${activeColors.text} rounded-lg flex items-center justify-center`}>
                    <UserMinus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Profil Detail Non-Pegawai — {selectedNonPegawai.id}
                    </h3>
                    <p className="text-slate-500 text-xs mt-0.5">
                      NIK: {selectedNonPegawai.nik}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6 overflow-y-auto">
                {/* 1. Identitas Pribadi */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Identitas Personal</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Nama Lengkap</p>
                      <p className="font-semibold mt-1 text-slate-900 text-sm">{selectedNonPegawai.nama}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Tempat, Tanggal Lahir</p>
                      <p className="font-medium mt-1 text-slate-900">
                        {selectedNonPegawai.tempat_lahir || "-"}, {selectedNonPegawai.tanggal_lahir || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Jenis Kelamin</p>
                      <p className="font-medium mt-1 text-slate-900">
                        {selectedNonPegawai.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Agama</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.agama || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Pendidikan Terakhir</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.pendidikan_terakhir || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Status Perkawinan</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.status_perkawinan || "-"}</p>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Alamat Lengkap</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.alamat || "-"}</p>
                    </div>
                  </div>
                </div>

                {/* 2. Kontak */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Contact className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Kontak Penghubung</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">No. HP / WhatsApp</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.no_hp_wa || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Email</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.email || "-"}</p>
                    </div>
                  </div>
                </div>

                {/* 3. Penugasan & Status Kontrak */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Penugasan & Status Kontrak</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Jabatan / Tugas</p>
                      <p className="font-semibold mt-1 text-slate-900">{selectedNonPegawai.jabatan_tugas || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Unit Kerja / Bidang</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.unit_kerja || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Status Kepegawaian</p>
                      <p className="font-semibold mt-1 text-purple-700 bg-purple-50 px-2 py-0.5 rounded inline-block">
                        {selectedNonPegawai.status_kepegawaian}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Mulai Bekerja</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.tgl_mulai_kerja || "-"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Selesai Kontrak</p>
                      <p className="font-medium mt-1 text-slate-900">{selectedNonPegawai.tgl_selesai_kontrak || "Seumur Hidup / Tidak Ada"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Status Keaktifan</p>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-semibold inline-block mt-1 ${
                        selectedNonPegawai.status_aktif === "Aktif"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-rose-50 text-rose-700"
                      }`}>
                        {selectedNonPegawai.status_aktif}
                      </span>
                    </div>
                    {selectedNonPegawai.ket && (
                      <div className="col-span-1 md:col-span-3">
                        <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Keterangan / Pihak Ketiga</p>
                        <p className="font-medium mt-1 text-slate-900 bg-slate-50 p-2 border border-slate-100 rounded">{selectedNonPegawai.ket}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-white p-4 border-t border-slate-200 flex justify-end shrink-0">
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-bold cursor-pointer"
                >
                  Tutup Detail
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ADD / EDIT FORM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {editingIndex !== null ? "Edit Data Non-Pegawai" : "Tambah Data Non-Pegawai Baru"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    ID Non-Pegawai akan digenerate otomatis: <span className="font-mono font-bold text-slate-700">{formState.id}</span>
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Section 1: Identitas Pribadi */}
                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-600 pb-1 border-b border-slate-100 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    1. Identitas Pribadi & Keanggotaan
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        ID Non-Pegawai (Otomatis)
                      </label>
                      <input
                        type="text"
                        disabled
                        value={formState.id}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs bg-slate-50 text-slate-500 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        NIK (Nomor Induk Kependudukan) *
                      </label>
                      <input
                        type="text"
                        maxLength={16}
                        required
                        placeholder="Masukkan 16 digit NIK"
                        value={formState.nik}
                        onChange={(e) => setFormState({ ...formState, nik: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Nama Lengkap (Sesuai KTP) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masukkan Nama Lengkap Non-Pegawai"
                        value={formState.nama}
                        onChange={(e) => setFormState({ ...formState, nama: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Tempat Lahir (Kota/Kabupaten)
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan tempat lahir"
                        value={formState.tempat_lahir}
                        onChange={(e) => setFormState({ ...formState, tempat_lahir: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        value={formState.tanggal_lahir}
                        onChange={(e) => setFormState({ ...formState, tanggal_lahir: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Jenis Kelamin
                      </label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="jenis_kelamin_non"
                            checked={formState.jenis_kelamin === "L"}
                            onChange={() => setFormState({ ...formState, jenis_kelamin: "L" })}
                          />
                          Laki-Laki (L)
                        </label>
                        <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="jenis_kelamin_non"
                            checked={formState.jenis_kelamin === "P"}
                            onChange={() => setFormState({ ...formState, jenis_kelamin: "P" })}
                          />
                          Perempuan (P)
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Agama
                      </label>
                      <select
                        value={formState.agama}
                        onChange={(e) => setFormState({ ...formState, agama: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs bg-white focus:outline-none"
                      >
                        <option value="Islam">Islam</option>
                        <option value="Kristen Protestan">Kristen Protestan</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Buddha">Buddha</option>
                        <option value="Konghucu">Konghucu</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Pendidikan Terakhir
                      </label>
                      <select
                        value={formState.pendidikan_terakhir}
                        onChange={(e) => setFormState({ ...formState, pendidikan_terakhir: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs bg-white focus:outline-none"
                      >
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA/SMK">SMA/SMK</option>
                        <option value="D1">D1</option>
                        <option value="D2">D2</option>
                        <option value="D3">D3</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Status Perkawinan
                      </label>
                      <select
                        value={formState.status_perkawinan}
                        onChange={(e) => setFormState({ ...formState, status_perkawinan: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs bg-white focus:outline-none"
                      >
                        <option value="Belum Kawin">Belum Kawin</option>
                        <option value="Kawin">Kawin</option>
                        <option value="Cerai Hidup">Cerai Hidup</option>
                        <option value="Cerai Mati">Cerai Mati</option>
                      </select>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Alamat Lengkap
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Masukkan alamat tinggal lengkap"
                        value={formState.alamat}
                        onChange={(e) => setFormState({ ...formState, alamat: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Kontak */}
                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-600 pb-1 border-b border-slate-100 flex items-center gap-1">
                    <Contact className="w-3.5 h-3.5" />
                    2. Kontak Penghubung
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        No. HP / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: 08123456789"
                        value={formState.no_hp_wa}
                        onChange={(e) => setFormState({ ...formState, no_hp_wa: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Contoh: non.pegawai@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Jabatan & Kontrak */}
                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-600 pb-1 border-b border-slate-100 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    3. Pekerjaan & Kontrak Penugasan
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Jabatan / Tugas *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Magang IT, Driver, Staf Kebersihan"
                        value={formState.jabatan_tugas}
                        onChange={(e) => setFormState({ ...formState, jabatan_tugas: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Unit Kerja / Sub Bagian
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Bidang Keamanan, Subbag Kepegawaian"
                        value={formState.unit_kerja}
                        onChange={(e) => setFormState({ ...formState, unit_kerja: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Status Kepegawaian
                      </label>
                      <select
                        value={formState.status_kepegawaian}
                        onChange={(e) => setFormState({ ...formState, status_kepegawaian: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs bg-white focus:outline-none"
                      >
                        <option value="Magang/PKL">Magang/PKL</option>
                        <option value="Pihak Ketiga/Outsourcing">Pihak Ketiga/Outsourcing</option>
                        <option value="Tenaga Ahli/Konsultan">Tenaga Ahli/Konsultan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Status Aktif
                      </label>
                      <select
                        value={formState.status_aktif}
                        onChange={(e) => setFormState({ ...formState, status_aktif: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs bg-white focus:outline-none"
                      >
                        <option value="Aktif">Aktif</option>
                        <option value="Nonaktif">Nonaktif</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Tanggal Mulai Kerja (Awal Bekerja)
                      </label>
                      <input
                        type="date"
                        value={formState.tgl_mulai_kerja}
                        onChange={(e) => setFormState({ ...formState, tgl_mulai_kerja: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Tanggal Selesai Kontrak (Jika Ada)
                      </label>
                      <input
                        type="date"
                        value={formState.tgl_selesai_kontrak}
                        onChange={(e) => setFormState({ ...formState, tgl_selesai_kontrak: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Keterangan (Nama Pihak Ketiga / Instansi Asal / Detail Tambahan)
                      </label>
                      <input
                        type="text"
                        placeholder="Sebutkan nama PT outsourcing / asal kampus magang jika ada"
                        value={formState.ket}
                        onChange={(e) => setFormState({ ...formState, ket: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Buttons inside Form */}
                <div className="p-4 border-t border-slate-100 flex justify-end gap-2 bg-slate-50 -mx-6 -mb-6 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-200 rounded text-xs font-bold text-slate-500 hover:bg-slate-50 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className={`px-5 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded text-xs font-bold cursor-pointer shadow-sm`}
                  >
                    Simpan Data Non-Pegawai
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AgendaPimpinanView = ({
  agendaList,
  onAdd,
  onEdit,
  onDelete,
  onSoftDelete,
  onRestore,
  theme = "indigo",
}: {
  agendaList: any[];
  onAdd: (item: any) => void;
  onEdit: (idx: number, item: any) => void;
  onDelete: (idx: number) => void;
  onSoftDelete: (idx: number) => void;
  onRestore: (idx: number) => void;
  theme?: string;
}) => {
  const activeColors = THEMES[theme as keyof typeof THEMES] || THEMES.indigo;
  const [activeSubTab, setActiveSubTab] = useState("calendar"); // "calendar", "week", "table"
  const [searchQuery, setSearchQuery] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateStr, setSelectedDateStr] = useState<string>(() => {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  });

  // Form State
  const [formData, setFormData] = useState({
    judul: "",
    waktu_mulai: "",
    waktu_selesai: "",
    pic: "",
    keterangan: "",
  });

  const handleOpenAdd = (dateStr?: string) => {
    setEditIndex(null);
    setFormData({
      judul: "",
      waktu_mulai: dateStr ? `${dateStr}T09:00` : "",
      waktu_selesai: dateStr ? `${dateStr}T10:00` : "",
      pic: "",
      keterangan: "",
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (index: number, item: any) => {
    setEditIndex(index);
    setFormData({
      judul: item.judul || "",
      waktu_mulai: item.waktu_mulai || "",
      waktu_selesai: item.waktu_selesai || "",
      pic: item.pic || "",
      keterangan: item.keterangan || "",
    });
    setIsModalOpen(true);
  };

  const handleOpenDetail = (item: any) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.judul || !formData.waktu_mulai || !formData.waktu_selesai || !formData.pic) {
      alert("Harap isi semua kolom wajib!");
      return;
    }
    if (new Date(formData.waktu_selesai) <= new Date(formData.waktu_mulai)) {
      alert("Waktu selesai harus setelah waktu mulai!");
      return;
    }

    const newItem = {
      ...formData,
      id: editIndex !== null ? agendaList[editIndex].id : "ag-" + Date.now(),
      is_archived: editIndex !== null ? agendaList[editIndex].is_archived : false,
    };

    if (editIndex !== null) {
      onEdit(editIndex, newItem);
    } else {
      onAdd(newItem);
    }
    setIsModalOpen(false);
  };

  // Filter Agenda items based on search query & archived toggle
  const filteredAgendas = agendaList.filter((item) => {
    const isArchivedMatch = showArchived ? item.is_archived : !item.is_archived;
    const matchSearch =
      searchQuery === "" ||
      item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.pic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keterangan.toLowerCase().includes(searchQuery.toLowerCase());
    return isArchivedMatch && matchSearch;
  });

  // Calendar calculations
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday, etc.
  const totalDays = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Format date values to YYYY-MM-DD
  const formatDateStr = (d: number) => {
    const mStr = String(month + 1).padStart(2, '0');
    const dStr = String(d).padStart(2, '0');
    return `${year}-${mStr}-${dStr}`;
  };

  const getAgendasForDate = (dateStr: string) => {
    return filteredAgendas.filter((item) => {
      if (!item.waktu_mulai) return false;
      return item.waktu_mulai.substring(0, 10) === dateStr;
    });
  };

  const formatDateTimeIndo = (dtStr: string) => {
    if (!dtStr) return "";
    const dt = new Date(dtStr);
    const datePart = dt.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const timePart = dt.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${datePart} - Pukul ${timePart} WIB`;
  };

  // Daily agendas for selectedDateStr
  const dailyAgendas = getAgendasForDate(selectedDateStr);

  // Weekly calculations
  const getWeeklyDays = () => {
    const selected = new Date(selectedDateStr);
    const dayOfWeek = selected.getDay(); // 0 (Sun) - 6 (Sat)
    const shift = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const monday = new Date(selected);
    monday.setDate(selected.getDate() - shift);

    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const yStr = d.getFullYear();
      const mStr = String(d.getMonth() + 1).padStart(2, '0');
      const dStr = String(d.getDate()).padStart(2, '0');
      days.push({
        date: d,
        dateStr: `${yStr}-${mStr}-${dStr}`,
        label: d.toLocaleDateString("id-ID", { weekday: "short" }),
        num: d.getDate(),
      });
    }
    return days;
  };

  const weeklyDays = getWeeklyDays();

  return (
    <div className="space-y-6">
      {/* Upper header action block */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">Agenda Pimpinan</h3>
          <p className="text-xs text-slate-500 mt-0.5">Pantau, koordinasikan, dan jadwalkan kegiatan pimpinan secara terintegrasi.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Toggle for showing Archive (Soft Deleted) */}
          <button
            onClick={() => setShowArchived(!showArchived)}
            className={`flex items-center gap-1.5 px-3.5 py-2 border rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              showArchived
                ? "bg-amber-50 border-amber-200 text-amber-700"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-800"
            }`}
          >
            <Archive className="w-3.5 h-3.5" />
            <span>{showArchived ? "Tampilkan Aktif" : "Buka Arsip Agenda"}</span>
          </button>

          <button
            onClick={() => handleOpenAdd(selectedDateStr)}
            className={`flex items-center gap-1.5 px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer`}
          >
            <Plus className="w-4 h-4" />
            Tambah Agenda Baru
          </button>
        </div>
      </div>

      {/* Main navigation slider & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {[
            { id: "calendar", label: "Kalender & Agenda Harian", icon: Calendar },
            { id: "week", label: "Agenda Mingguan", icon: CalendarDays },
            { id: "table", label: "Tabel Data Agenda", icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? `${activeColors.bgLight} ${activeColors.text} border border-slate-100 shadow-2xs`
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari agenda, PIC, dll..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 bg-white"
          />
        </div>
      </div>

      {/* Subtab 1: Calendar & Daily */}
      {activeSubTab === "calendar" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Monthly Calendar View (7 columns) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-extrabold text-slate-900">
                {monthNames[month]} {year}
              </h4>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrevMonth}
                  className="p-1.5 hover:bg-slate-100 rounded-lg border border-slate-100 text-slate-600 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-1.5 hover:bg-slate-100 rounded-lg border border-slate-100 text-slate-600 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {/* Day Headers */}
              {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day, idx) => (
                <div key={idx} className="text-[10px] font-bold text-slate-400 uppercase py-1">
                  {day}
                </div>
              ))}

              {/* Pad previous month days */}
              {Array.from({ length: firstDayIndex }).map((_, idx) => (
                <div key={`empty-${idx}`} className="h-16 bg-slate-50/50 border border-slate-100/50 rounded-lg opacity-40"></div>
              ))}

              {/* Active days in month */}
              {Array.from({ length: totalDays }).map((_, idx) => {
                const dayNum = idx + 1;
                const dStr = formatDateStr(dayNum);
                const isSelected = selectedDateStr === dStr;
                const agendas = getAgendasForDate(dStr);
                const hasAgendas = agendas.length > 0;

                return (
                  <button
                    key={`day-${dayNum}`}
                    onClick={() => setSelectedDateStr(dStr)}
                    className={`h-16 border rounded-lg flex flex-col justify-between p-1.5 transition-all cursor-pointer relative text-left group ${
                      isSelected
                        ? `${activeColors.bgLight} border-${theme}-400 ring-2 ring-${theme}-100 z-10`
                        : "border-slate-100 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <span className={`text-[11px] font-bold ${isSelected ? activeColors.text : "text-slate-700"}`}>
                      {dayNum}
                    </span>
                    {hasAgendas && (
                      <div className="w-full flex flex-col gap-0.5 mt-1 overflow-hidden">
                        {agendas.slice(0, 2).map((ag, index) => (
                          <div
                            key={index}
                            className={`text-[9px] px-1 py-0.5 rounded truncate font-medium ${
                              ag.is_archived
                                ? "bg-slate-100 text-slate-500"
                                : `${activeColors.bgLight} ${activeColors.text} border-l-2 border-${theme}-500`
                            }`}
                            title={ag.judul}
                          >
                            {ag.judul}
                          </div>
                        ))}
                        {agendas.length > 2 && (
                          <span className="text-[8px] text-slate-400 font-bold pl-1">
                            +{agendas.length - 2} agenda
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Daily Timeline View (5 columns) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs lg:col-span-5 flex flex-col justify-between min-h-[400px]">
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Jadwal Agenda Harian</h4>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm font-extrabold text-slate-900">
                    {new Date(selectedDateStr).toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <button
                    onClick={() => handleOpenAdd(selectedDateStr)}
                    className={`px-2 py-1 text-[10px] font-bold ${activeColors.primary} text-white rounded hover:bg-opacity-90 transition-all cursor-pointer`}
                  >
                    Tambah Agenda
                  </button>
                </div>
              </div>

              {/* Timeline list */}
              <div className="space-y-3 overflow-y-auto max-h-[360px] pr-1">
                {dailyAgendas.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 flex flex-col items-center gap-2">
                    <Calendar className="w-8 h-8 text-slate-300" />
                    <p className="text-xs font-semibold text-slate-500">Tidak ada agenda untuk hari ini</p>
                    <button
                      onClick={() => handleOpenAdd(selectedDateStr)}
                      className="text-[10px] font-bold text-slate-400 hover:text-slate-600 underline cursor-pointer"
                    >
                      Jadwalkan agenda baru sekarang
                    </button>
                  </div>
                ) : (
                  dailyAgendas.map((item) => {
                    const startTime = item.waktu_mulai ? item.waktu_mulai.substring(11, 16) : "00:00";
                    const endTime = item.waktu_selesai ? item.waktu_selesai.substring(11, 16) : "00:00";

                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={item.id}
                        className={`p-3.5 rounded-xl border transition-all hover:shadow-xs relative group ${
                          item.is_archived
                            ? "bg-slate-50 border-slate-100 text-slate-500"
                            : "bg-white border-slate-150 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                <Clock className="w-3 h-3" />
                                {startTime} - {endTime} WIB
                              </span>
                              {item.is_archived && (
                                <span className="bg-amber-100 text-amber-800 text-[8px] font-bold px-1.5 py-0.5 rounded">
                                  ARSIP
                                </span>
                              )}
                            </div>
                            <h5 className="text-xs font-extrabold text-slate-900 group-hover:text-slate-700">
                              {item.judul}
                            </h5>
                            <p className="text-[10px] font-bold text-slate-400">
                              PIC: <span className="text-slate-600 font-semibold">{item.pic}</span>
                            </p>
                          </div>

                          <button
                            onClick={() => handleOpenDetail(item)}
                            className="text-[10px] font-bold text-slate-400 hover:text-slate-600 underline shrink-0 cursor-pointer"
                          >
                            Detail
                          </button>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-400 font-medium">
              Tip: Klik pada tanggal di kalender sebelah kiri untuk mengubah tampilan hari.
            </div>
          </div>
        </div>
      )}

      {/* Subtab 2: Weekly View */}
      {activeSubTab === "week" && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">Agenda Mingguan Pimpinan</h4>
              <p className="text-[10px] text-slate-500">Melihat visualisasi jadwal 7 hari kedepan.</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  const d = new Date(selectedDateStr);
                  d.setDate(d.getDate() - 7);
                  const y = d.getFullYear();
                  const m = String(d.getMonth() + 1).padStart(2, '0');
                  const day = String(d.getDate()).padStart(2, '0');
                  setSelectedDateStr(`${y}-${m}-${day}`);
                }}
                className="p-1.5 hover:bg-slate-100 rounded-lg border border-slate-100 text-slate-600 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const d = new Date(selectedDateStr);
                  d.setDate(d.getDate() + 7);
                  const y = d.getFullYear();
                  const m = String(d.getMonth() + 1).padStart(2, '0');
                  const day = String(d.getDate()).padStart(2, '0');
                  setSelectedDateStr(`${y}-${m}-${day}`);
                }}
                className="p-1.5 hover:bg-slate-100 rounded-lg border border-slate-100 text-slate-600 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Grid layout for 7 days */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {weeklyDays.map((day) => {
              const agendas = getAgendasForDate(day.dateStr);
              const isSelected = selectedDateStr === day.dateStr;

              return (
                <div
                  key={day.dateStr}
                  className={`border rounded-xl p-3 min-h-[220px] flex flex-col space-y-3 transition-all ${
                    isSelected
                      ? `${activeColors.bgLight} border-${theme}-300 ring-1 ring-${theme}-100`
                      : "border-slate-100 bg-slate-50/20"
                  }`}
                >
                  <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                    <div>
                      <p className={`text-[10px] font-bold uppercase ${isSelected ? activeColors.text : "text-slate-400"}`}>
                        {day.label}
                      </p>
                      <p className={`text-base font-extrabold ${isSelected ? activeColors.text : "text-slate-800"}`}>
                        {day.num}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedDateStr(day.dateStr);
                        handleOpenAdd(day.dateStr);
                      }}
                      className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-700 cursor-pointer"
                      title="Tambah agenda hari ini"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Agendas list */}
                  <div className="flex-1 flex flex-col gap-2 overflow-y-auto max-h-[160px]">
                    {agendas.length === 0 ? (
                      <span className="text-[10px] text-slate-300 italic py-3 text-center">Tidak ada agenda</span>
                    ) : (
                      agendas.map((item) => {
                        const sTime = item.waktu_mulai ? item.waktu_mulai.substring(11, 16) : "00:00";
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleOpenDetail(item)}
                            className={`p-2 rounded border text-left cursor-pointer hover:shadow-2xs transition-all ${
                              item.is_archived
                                ? "bg-slate-100 text-slate-400 border-slate-200"
                                : `bg-white border-slate-200 hover:border-slate-400`
                            }`}
                          >
                            <span className="text-[8px] font-bold text-slate-400 block mb-0.5">{sTime} WIB</span>
                            <p className="text-[10px] font-extrabold text-slate-800 truncate" title={item.judul}>
                              {item.judul}
                            </p>
                            <p className="text-[8px] text-slate-400 truncate mt-0.5">PIC: {item.pic}</p>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Subtab 3: Table View */}
      {activeSubTab === "table" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="px-5 py-3.5">Judul Agenda</th>
                  <th className="px-5 py-3.5">Waktu Mulai</th>
                  <th className="px-5 py-3.5">Waktu Selesai</th>
                  <th className="px-5 py-3.5">PIC Pelaksana</th>
                  <th className="px-5 py-3.5">Keterangan</th>
                  <th className="px-5 py-3.5">Status / Arsip</th>
                  <th className="px-5 py-3.5 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {filteredAgendas.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-5 py-12 text-center text-slate-400">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Calendar className="w-8 h-8 text-slate-300" />
                        <p className="font-semibold text-slate-500">Tidak ada agenda ditemukan</p>
                        <p className="text-[10px] text-slate-400">Silakan ubah kata kunci atau tambahkan agenda baru.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredAgendas.map((item) => {
                    const originalIndex = agendaList.findIndex((x) => x.id === item.id);
                    return (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3.5 font-bold text-slate-900 max-w-xs truncate" title={item.judul}>
                          {item.judul}
                        </td>
                        <td className="px-5 py-3.5 font-mono text-[11px] whitespace-nowrap">
                          {formatDateTimeIndo(item.waktu_mulai).split(" - ")[0]} <br />
                          <span className="text-slate-400 text-[10px]">{item.waktu_mulai.substring(11, 16)} WIB</span>
                        </td>
                        <td className="px-5 py-3.5 font-mono text-[11px] whitespace-nowrap">
                          {formatDateTimeIndo(item.waktu_selesai).split(" - ")[0]} <br />
                          <span className="text-slate-400 text-[10px]">{item.waktu_selesai.substring(11, 16)} WIB</span>
                        </td>
                        <td className="px-5 py-3.5 font-semibold text-slate-800">{item.pic}</td>
                        <td className="px-5 py-3.5 text-slate-500 max-w-sm truncate" title={item.keterangan}>
                          {item.keterangan || "-"}
                        </td>
                        <td className="px-5 py-3.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.is_archived
                              ? "bg-amber-100 text-amber-800"
                              : "bg-emerald-100 text-emerald-800"
                          }`}>
                            {item.is_archived ? "Arsip" : "Aktif"}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleOpenDetail(item)}
                              className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 cursor-pointer transition-colors"
                              title="Buka Detail"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleOpenEdit(originalIndex, item)}
                              className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 cursor-pointer transition-colors"
                              title="Ubah Agenda"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => {
                                if (item.is_archived) {
                                  onRestore(originalIndex);
                                } else {
                                  onSoftDelete(originalIndex);
                                }
                              }}
                              className="p-1 hover:bg-slate-100 rounded text-amber-500 hover:text-amber-700 cursor-pointer transition-colors"
                              title={item.is_archived ? "Kembalikan dari Arsip" : "Arsipkan (Soft Delete)"}
                            >
                              <Archive className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => onDelete(originalIndex)}
                              className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-rose-600 cursor-pointer transition-colors"
                              title="Hapus Permanen"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Floating Add/Edit Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">
                    {editIndex !== null ? "Ubah Agenda Pimpinan" : "Tambah Agenda Pimpinan"}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">Silakan isi formulir agenda dengan lengkap.</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Judul Agenda <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Rapat Koordinasi Anggaran"
                    value={formData.judul}
                    onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Waktu Mulai <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      value={formData.waktu_mulai}
                      onChange={(e) => setFormData({ ...formData, waktu_mulai: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Waktu Selesai <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      value={formData.waktu_selesai}
                      onChange={(e) => setFormData({ ...formData, waktu_selesai: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    PIC Penanggungjawab / Pelaksana <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Bpk. Sekda, Bagian Protokol"
                    value={formData.pic}
                    onChange={(e) => setFormData({ ...formData, pic: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Keterangan / Deskripsi</label>
                  <textarea
                    rows={3}
                    placeholder="Tuliskan catatan, lokasi rapat, agenda pembahasan, dll..."
                    value={formData.keterangan}
                    onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className={`px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer`}
                  >
                    {editIndex !== null ? "Simpan Perubahan" : "Jadwalkan Agenda"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Detail Jendela Mengembang (Slide Over or Centered Modal) */}
      <AnimatePresence>
        {isDetailOpen && selectedItem && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className={`p-4 ${activeColors.primary} text-white flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-white/90" />
                  <div>
                    <h4 className="font-extrabold text-sm tracking-tight text-white">Detail Agenda Pimpinan</h4>
                    <span className="text-[10px] text-white/80 font-mono">ID: {selectedItem.id}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg text-white/90 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Judul Kegiatan</span>
                  <h3 className="text-sm font-extrabold text-slate-900 leading-tight">{selectedItem.judul}</h3>
                </div>

                <div className="grid grid-cols-1 gap-3 border-y border-slate-100 py-3">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Waktu Pelaksanaan</span>
                    <p className="font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{formatDateTimeIndo(selectedItem.waktu_mulai).split(" - ")[0]}</span>
                    </p>
                    <p className="font-bold text-slate-600 pl-5 mt-0.5">
                      Pukul {selectedItem.waktu_mulai ? selectedItem.waktu_mulai.substring(11, 16) : ""} s/d {selectedItem.waktu_selesai ? selectedItem.waktu_selesai.substring(11, 16) : ""} WIB
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">PIC Pelaksana</span>
                    <p className="font-bold text-slate-800 mt-1">{selectedItem.pic}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Status Arsip</span>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mt-1 ${
                      selectedItem.is_archived
                        ? "bg-amber-100 text-amber-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {selectedItem.is_archived ? "Arsip (Soft Delete)" : "Aktif"}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Keterangan / Catatan Tambahan</span>
                  <p className="text-slate-600 font-medium whitespace-pre-wrap leading-relaxed mt-1">
                    {selectedItem.keterangan || "Tidak ada catatan tambahan."}
                  </p>
                </div>

                {/* Footer action */}
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setIsDetailOpen(false)}
                    className={`px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold transition-colors cursor-pointer`}
                  >
                    Tutup Jendela
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const KontakRelasiView = ({
  kontakList,
  onAdd,
  onEdit,
  onDelete,
  onSoftDelete,
  onRestore,
  theme = "indigo",
}: {
  kontakList: any[];
  onAdd: (item: any) => void;
  onEdit: (idx: number, item: any) => void;
  onDelete: (idx: number) => void;
  onSoftDelete: (idx: number) => void;
  onRestore: (idx: number) => void;
  theme?: string;
}) => {
  const activeColors = THEMES[theme as keyof typeof THEMES] || THEMES.indigo;
  const [selectedKategori, setSelectedKategori] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Form State
  const [formData, setFormData] = useState({
    kategori: "Instansi Pemerintah",
    nama_instansi: "",
    nama_kontak: "",
    jabatan: "",
    alamat: "",
    telepon: "",
    faxmile: "",
    whatsapp: "",
    email: "",
    website: "",
    catatan: "",
  });

  const categories = [
    "Instansi Pemerintah",
    "Rumah Sakit/Puskesmas",
    "Perguruan Tinggi/Sekolah",
    "Perusahaan/Vendor",
    "Organisasi",
    "Mitra Kerja",
    "Perorangan",
  ];

  const handleOpenAdd = () => {
    setEditIndex(null);
    setFormData({
      kategori: selectedKategori !== "ALL" ? selectedKategori : "Instansi Pemerintah",
      nama_instansi: "",
      nama_kontak: "",
      jabatan: "",
      alamat: "",
      telepon: "",
      faxmile: "",
      whatsapp: "",
      email: "",
      website: "",
      catatan: "",
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (index: number, item: any) => {
    setEditIndex(index);
    setFormData({
      kategori: item.kategori || "Instansi Pemerintah",
      nama_instansi: item.nama_instansi || "",
      nama_kontak: item.nama_kontak || "",
      jabatan: item.jabatan || "",
      alamat: item.alamat || "",
      telepon: item.telepon || "",
      faxmile: item.faxmile || "",
      whatsapp: item.whatsapp || "",
      email: item.email || "",
      website: item.website || "",
      catatan: item.catatan || "",
    });
    setIsModalOpen(true);
  };

  const handleOpenDetail = (item: any) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama_kontak && !formData.nama_instansi) {
      alert("Harap isi Nama Instansi atau Nama Kontak!");
      return;
    }

    const newItem = {
      ...formData,
      id: editIndex !== null ? kontakList[editIndex].id : "kr-" + Date.now(),
      is_archived: editIndex !== null ? kontakList[editIndex].is_archived : false,
    };

    if (editIndex !== null) {
      onEdit(editIndex, newItem);
    } else {
      onAdd(newItem);
    }
    setIsModalOpen(false);
  };

  // Filter Contacts based on search query, category & archived toggle
  const filteredContacts = kontakList.filter((item) => {
    const isArchivedMatch = showArchived ? item.is_archived : !item.is_archived;
    const matchCategory = selectedKategori === "ALL" || item.kategori === selectedKategori;
    
    const searchLower = searchQuery.toLowerCase();
    const matchSearch =
      searchQuery === "" ||
      (item.nama_instansi && item.nama_instansi.toLowerCase().includes(searchLower)) ||
      (item.nama_kontak && item.nama_kontak.toLowerCase().includes(searchLower)) ||
      (item.jabatan && item.jabatan.toLowerCase().includes(searchLower)) ||
      (item.alamat && item.alamat.toLowerCase().includes(searchLower)) ||
      (item.telepon && item.telepon.toLowerCase().includes(searchLower)) ||
      (item.email && item.email.toLowerCase().includes(searchLower)) ||
      (item.catatan && item.catatan.toLowerCase().includes(searchLower));

    return isArchivedMatch && matchCategory && matchSearch;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Instansi Pemerintah": return "bg-sky-50 text-sky-700 border-sky-150";
      case "Rumah Sakit/Puskesmas": return "bg-emerald-50 text-emerald-700 border-emerald-150";
      case "Perguruan Tinggi/Sekolah": return "bg-violet-50 text-violet-700 border-violet-150";
      case "Perusahaan/Vendor": return "bg-indigo-50 text-indigo-700 border-indigo-150";
      case "Organisasi": return "bg-amber-50 text-amber-700 border-amber-150";
      case "Mitra Kerja": return "bg-teal-50 text-teal-700 border-teal-150";
      case "Perorangan": return "bg-rose-50 text-rose-700 border-rose-150";
      default: return "bg-slate-50 text-slate-700 border-slate-150";
    }
  };

  return (
    <div className="space-y-6">
      {/* Upper header action block */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">Kontak Relasi SIM-TU</h3>
          <p className="text-xs text-slate-500 mt-0.5">Kelola seluruh jejaring, instansi mitra, vendor, dan kontak relasi kepemerintahan secara rapi.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Toggle for showing Archive (Soft Deleted) */}
          <button
            onClick={() => {
              setShowArchived(!showArchived);
              setSelectedKategori("ALL");
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 border rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              showArchived
                ? "bg-amber-50 border-amber-200 text-amber-700"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-800"
            }`}
          >
            <Archive className="w-3.5 h-3.5" />
            <span>{showArchived ? "Tampilkan Kontak Aktif" : "Buka Arsip Kontak"}</span>
          </button>

          <button
            onClick={handleOpenAdd}
            className={`flex items-center gap-1.5 px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer`}
          >
            <Plus className="w-4 h-4" />
            Tambah Kontak Baru
          </button>
        </div>
      </div>

      {/* Categories slider & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-2">
        {/* Horizontal Category Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-2 px-2 scrollbar-none">
          <button
            onClick={() => setSelectedKategori("ALL")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedKategori === "ALL"
                ? `${activeColors.bgLight} ${activeColors.text} border border-slate-100 shadow-2xs`
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            Semua Kategori
            <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[10px]">
              {kontakList.filter(k => showArchived ? k.is_archived : !k.is_archived).length}
            </span>
          </button>

          {categories.map((cat) => {
            const count = kontakList.filter(k => k.kategori === cat && (showArchived ? k.is_archived : !k.is_archived)).length;
            const isActive = selectedKategori === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedKategori(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? `${activeColors.bgLight} ${activeColors.text} border border-slate-100 shadow-2xs`
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {cat}
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? `${activeColors.primary} text-white` : "bg-slate-100 text-slate-600"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama, instansi, email, hp..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 bg-white"
          />
        </div>
      </div>

      {/* Grid of Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.length === 0 ? (
          <div className="col-span-full bg-white border border-slate-200 p-12 rounded-2xl text-center text-slate-400 flex flex-col items-center justify-center gap-2">
            <Contact className="w-10 h-10 text-slate-300" />
            <p className="font-semibold text-slate-500">Tidak ada kontak relasi ditemukan</p>
            <p className="text-[10px] text-slate-400">Silakan ubah kategori/kata kunci pencarian atau buat kontak relasi baru.</p>
          </div>
        ) : (
          filteredContacts.map((item) => {
            const originalIndex = kontakList.findIndex((x) => x.id === item.id);
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={item.id}
                className={`bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all relative group ${
                  item.is_archived ? "bg-slate-50 border-slate-100 opacity-90" : ""
                }`}
              >
                {/* Header card: Category & Actions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${getCategoryColor(item.kategori)}`}>
                      {item.kategori}
                    </span>
                    <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleOpenDetail(item)}
                        className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 cursor-pointer"
                        title="Buka Detail"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleOpenEdit(originalIndex, item)}
                        className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 cursor-pointer"
                        title="Ubah Kontak"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          if (item.is_archived) {
                            onRestore(originalIndex);
                          } else {
                            onSoftDelete(originalIndex);
                          }
                        }}
                        className="p-1 hover:bg-slate-100 rounded text-amber-500 hover:text-amber-700 cursor-pointer"
                        title={item.is_archived ? "Pulihkan Kontak" : "Arsipkan (Soft Delete)"}
                      >
                        <Archive className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onDelete(originalIndex)}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-rose-600 cursor-pointer"
                        title="Hapus Permanen"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Contact Main Info */}
                  <div className="space-y-1">
                    {item.nama_instansi && (
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.nama_instansi}</h4>
                    )}
                    <h3 className="text-sm font-extrabold text-slate-900 leading-tight">
                      {item.nama_kontak || "N/A"}
                    </h3>
                    {item.jabatan && (
                      <p className="text-xs text-slate-600 font-semibold">{item.jabatan}</p>
                    )}
                  </div>

                  {/* Compact Quick Contact list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                    {item.telepon && (
                      <p className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="font-mono">{item.telepon}</span>
                      </p>
                    )}
                    {item.email && (
                      <p className="flex items-center gap-2 truncate">
                        <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{item.email}</span>
                      </p>
                    )}
                    {item.alamat && (
                      <p className="flex items-center gap-2 truncate text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate" title={item.alamat}>{item.alamat}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Direct interactive buttons */}
                <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-100">
                  {item.whatsapp && (
                    <a
                      href={`https://wa.me/${item.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-lg text-[10px] transition-colors cursor-pointer"
                    >
                      WhatsApp
                    </a>
                  )}
                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="flex-1 text-center py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-lg text-[10px] transition-colors cursor-pointer"
                    >
                      Kirim Email
                    </a>
                  )}
                  {item.website && (
                    <a
                      href={item.website.startsWith("http") ? item.website : `https://${item.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-lg text-[10px] transition-colors cursor-pointer"
                    >
                      Website
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Floating Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-lg w-full overflow-hidden my-8"
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">
                    {editIndex !== null ? "Ubah Kontak Relasi" : "Tambah Kontak Relasi Baru"}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">Lengkapi formulir di bawah untuk menyimpan kontak relasi baru.</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-3.5 max-h-[70vh] overflow-y-auto text-xs">
                {/* Category Selection */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Kategori Kontak <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nama Instansi</label>
                    <input
                      type="text"
                      placeholder="Contoh: BAPPEDA Prov. Jabar"
                      value={formData.nama_instansi}
                      onChange={(e) => setFormData({ ...formData, nama_instansi: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nama Kontak / Person</label>
                    <input
                      type="text"
                      placeholder="Contoh: Bpk. Dr. Ridwan, M.Si"
                      value={formData.nama_kontak}
                      onChange={(e) => setFormData({ ...formData, nama_kontak: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jabatan Kontak</label>
                  <input
                    type="text"
                    placeholder="Contoh: Kepala Bidang Perencanaan Makro"
                    value={formData.jabatan}
                    onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nomor Telepon</label>
                    <input
                      type="text"
                      placeholder="Contoh: 022-123456"
                      value={formData.telepon}
                      onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Faxmile</label>
                    <input
                      type="text"
                      placeholder="Contoh: 022-123457"
                      value={formData.faxmile}
                      onChange={(e) => setFormData({ ...formData, faxmile: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">No. WhatsApp</label>
                    <input
                      type="text"
                      placeholder="Contoh: 0812345678"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Alamat Email</label>
                    <input
                      type="email"
                      placeholder="nama@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Alamat Website</label>
                    <input
                      type="text"
                      placeholder="www.domain.go.id"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Alamat Lengkap</label>
                  <textarea
                    rows={2}
                    placeholder="Tuliskan nama jalan, blok, kelurahan, kecamatan, kota..."
                    value={formData.alamat}
                    onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Catatan Khusus</label>
                  <textarea
                    rows={2}
                    placeholder="Tuliskan catatan khusus, disposisi, atau keterangan tambahan..."
                    value={formData.catatan}
                    onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                  />
                </div>

                {/* Footer buttons */}
                <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className={`px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer`}
                  >
                    {editIndex !== null ? "Simpan Perubahan" : "Simpan Kontak Baru"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Detail Slide over / Modal (Jendela Mengembang) */}
      <AnimatePresence>
        {isDetailOpen && selectedItem && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header card themed */}
              <div className={`p-5 ${activeColors.primary} text-white space-y-2`}>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/10">
                    {selectedItem.kategori}
                  </span>
                  <button
                    onClick={() => setIsDetailOpen(false)}
                    className="p-1 hover:bg-white/10 rounded-lg text-white/90 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-0.5">
                  {selectedItem.nama_instansi && (
                    <span className="text-[10px] font-extrabold tracking-wider text-white/70 uppercase block">
                      {selectedItem.nama_instansi}
                    </span>
                  )}
                  <h3 className="text-base font-extrabold text-white tracking-tight leading-tight">
                    {selectedItem.nama_kontak || "Tanpa Nama Person"}
                  </h3>
                  {selectedItem.jabatan && (
                    <p className="text-xs text-white/90 font-semibold">{selectedItem.jabatan}</p>
                  )}
                </div>
              </div>

              {/* Detail list body */}
              <div className="p-5 space-y-4 text-xs">
                {/* Contact grid */}
                <div className="grid grid-cols-1 gap-3.5 border-b border-slate-100 pb-4">
                  {selectedItem.telepon && (
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Telepon Kantor / Fax</span>
                      <p className="font-bold text-slate-800 mt-1 font-mono flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        {selectedItem.telepon} {selectedItem.faxmile ? `/ Fax: ${selectedItem.faxmile}` : ""}
                      </p>
                    </div>
                  )}

                  {selectedItem.whatsapp && (
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Direct Link</span>
                      <p className="font-bold text-slate-800 mt-1 font-mono flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-500" />
                        <a
                          href={`https://wa.me/${selectedItem.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:underline"
                        >
                          {selectedItem.whatsapp}
                        </a>
                      </p>
                    </div>
                  )}

                  {selectedItem.email && (
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Alamat Email Resmi</span>
                      <p className="font-bold text-slate-800 mt-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <a href={`mailto:${selectedItem.email}`} className="hover:underline text-indigo-600">
                          {selectedItem.email}
                        </a>
                      </p>
                    </div>
                  )}

                  {selectedItem.website && (
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Alamat Website</span>
                      <p className="font-bold text-slate-800 mt-1 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                        <a
                          href={selectedItem.website.startsWith("http") ? selectedItem.website : `https://${selectedItem.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-indigo-600"
                        >
                          {selectedItem.website}
                        </a>
                      </p>
                    </div>
                  )}

                  {selectedItem.alamat && (
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Alamat Kantor / Surat</span>
                      <p className="font-medium text-slate-700 mt-1 flex items-start gap-1.5 leading-relaxed">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                        <span>{selectedItem.alamat}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Notes */}
                {selectedItem.catatan && (
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Catatan / Keterangan</span>
                    <p className="text-slate-600 font-medium whitespace-pre-wrap leading-relaxed mt-0.5">
                      {selectedItem.catatan}
                    </p>
                  </div>
                )}

                {/* Footer with action buttons */}
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setIsDetailOpen(false)}
                    className={`px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold transition-colors cursor-pointer`}
                  >
                    Tutup Jendela Detail
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RiwayatPegawaiView = ({
  pegawaiList,
  riwayatCutiList,
  onAddCuti,
  onEditCuti,
  onDeleteCuti,
  riwayatPangkatList,
  onAddPangkat,
  onEditPangkat,
  onDeletePangkat,
  riwayatJabatanList,
  onAddJabatan,
  onEditJabatan,
  onDeleteJabatan,
  riwayatDiklatList,
  onAddDiklat,
  onEditDiklat,
  onDeleteDiklat,
  riwayatPenghargaanList,
  onAddPenghargaan,
  onEditPenghargaan,
  onDeletePenghargaan,
  riwayatKgbList,
  onAddKgb,
  onEditKgb,
  onDeleteKgb,
  riwayatMutasiList,
  onAddMutasi,
  onEditMutasi,
  onDeleteMutasi,
  riwayatPensiunList,
  onAddPensiun,
  onEditPensiun,
  onDeletePensiun,
  theme = "indigo",
}: {
  pegawaiList: any[];
  riwayatCutiList: any[];
  onAddCuti: (item: any) => void;
  onEditCuti: (idx: number, item: any) => void;
  onDeleteCuti: (idx: number) => void;
  riwayatPangkatList: any[];
  onAddPangkat: (item: any) => void;
  onEditPangkat: (idx: number, item: any) => void;
  onDeletePangkat: (idx: number) => void;
  riwayatJabatanList: any[];
  onAddJabatan: (item: any) => void;
  onEditJabatan: (idx: number, item: any) => void;
  onDeleteJabatan: (idx: number) => void;
  riwayatDiklatList: any[];
  onAddDiklat: (item: any) => void;
  onEditDiklat: (idx: number, item: any) => void;
  onDeleteDiklat: (idx: number) => void;
  riwayatPenghargaanList: any[];
  onAddPenghargaan: (item: any) => void;
  onEditPenghargaan: (idx: number, item: any) => void;
  onDeletePenghargaan: (idx: number) => void;
  riwayatKgbList: any[];
  onAddKgb: (item: any) => void;
  onEditKgb: (idx: number, item: any) => void;
  onDeleteKgb: (idx: number) => void;
  riwayatMutasiList: any[];
  onAddMutasi: (item: any) => void;
  onEditMutasi: (idx: number, item: any) => void;
  onDeleteMutasi: (idx: number) => void;
  riwayatPensiunList: any[];
  onAddPensiun: (item: any) => void;
  onEditPensiun: (idx: number, item: any) => void;
  onDeletePensiun: (idx: number) => void;
  theme?: string;
}) => {
  const activeColors = THEMES[theme as keyof typeof THEMES] || THEMES.indigo;
  const [activeSubTab, setActiveSubTab] = useState("cuti");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterNip, setFilterNip] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Dynamic stateful form values
  const [formData, setFormData] = useState<any>({});

  // Reset/Initialize form state based on category
  const initForm = (category: string, editItem: any = null) => {
    if (editItem) {
      setFormData(editItem);
    } else {
      const base = {
        nip: filterNip !== "ALL" ? filterNip : (pegawaiList[0]?.nip || ""),
        nama: filterNip !== "ALL" ? (pegawaiList.find(p => p.nip === filterNip)?.nama || "") : (pegawaiList[0]?.nama || "")
      };

      switch (category) {
        case "cuti":
          setFormData({
            ...base,
            jenis_cuti: "Cuti Tahunan",
            tgl_mulai: "",
            tgl_selesai: "",
            durasi: "1",
            no_sk: "",
            status: "Disetujui",
            keterangan: ""
          });
          break;
        case "pangkat":
          setFormData({
            ...base,
            pangkat: "",
            golongan: "III/a",
            jenis_kenaikan: "Kenaikan Pangkat Reguler",
            tmt_pangkat: "",
            no_sk: "",
            tgl_sk: "",
            pejabat: ""
          });
          break;
        case "jabatan":
          setFormData({
            ...base,
            jabatan: "",
            unit_kerja: "",
            jenis_jabatan: "Fungsional Tertentu",
            tmt_jabatan: "",
            no_sk: "",
            tgl_sk: "",
            pejabat: "",
            eselon: "Non-Eselon"
          });
          break;
        case "diklat":
          setFormData({
            ...base,
            nama_diklat: "",
            jenis_diklat: "Diklat Teknis",
            penyelenggara: "",
            tgl_mulai: "",
            tgl_selesai: "",
            jam_pelajaran: "20",
            no_sertifikat: "",
            tgl_sertifikat: ""
          });
          break;
        case "penghargaan":
          setFormData({
            ...base,
            nama_penghargaan: "",
            jenis_penghargaan: "Penghargaan Instansi",
            tahun: new Date().getFullYear().toString(),
            no_sk: "",
            tgl_sk: "",
            pemberi: ""
          });
          break;
        case "kgb":
          setFormData({
            ...base,
            gapok_baru: "3000000",
            gapok_lama: "2800000",
            golongan: "III/a",
            masa_kerja: "5 Tahun 0 Bulan",
            tmt_kgb: "",
            no_surat: "",
            tgl_surat: "",
            pejabat: "Kepala Bagian Tata Usaha"
          });
          break;
        case "mutasi":
          setFormData({
            ...base,
            jenis_mutasi: "Rotasi Internal",
            asal: "",
            tujuan: "",
            jabatan_baru: "",
            tmt_mutasi: "",
            no_sk: "",
            tgl_sk: ""
          });
          break;
        case "pensiun":
          setFormData({
            ...base,
            jenis_pensiun: "Pensiun BUP",
            tmt_pensiun: "",
            golongan_terakhir: "",
            jabatan_terakhir: "",
            no_sk: "",
            tgl_sk: "",
            pejabat: "Bupati"
          });
          break;
      }
    }
  };

  const handleOpenAdd = () => {
    setEditIndex(null);
    initForm(activeSubTab);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (index: number, item: any) => {
    setEditIndex(index);
    initForm(activeSubTab, item);
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    switch (activeSubTab) {
      case "cuti": onDeleteCuti(index); break;
      case "pangkat": onDeletePangkat(index); break;
      case "jabatan": onDeleteJabatan(index); break;
      case "diklat": onDeleteDiklat(index); break;
      case "penghargaan": onDeletePenghargaan(index); break;
      case "kgb": onDeleteKgb(index); break;
      case "mutasi": onDeleteMutasi(index); break;
      case "pensiun": onDeletePensiun(index); break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nip) {
      alert("Silakan pilih pegawai terlebih dahulu");
      return;
    }

    if (editIndex !== null) {
      switch (activeSubTab) {
        case "cuti": onEditCuti(editIndex, formData); break;
        case "pangkat": onEditPangkat(editIndex, formData); break;
        case "jabatan": onEditJabatan(editIndex, formData); break;
        case "diklat": onEditDiklat(editIndex, formData); break;
        case "penghargaan": onEditPenghargaan(editIndex, formData); break;
        case "kgb": onEditKgb(editIndex, formData); break;
        case "mutasi": onEditMutasi(editIndex, formData); break;
        case "pensiun": onEditPensiun(editIndex, formData); break;
      }
    } else {
      switch (activeSubTab) {
        case "cuti": onAddCuti(formData); break;
        case "pangkat": onAddPangkat(formData); break;
        case "jabatan": onAddJabatan(formData); break;
        case "diklat": onAddDiklat(formData); break;
        case "penghargaan": onAddPenghargaan(formData); break;
        case "kgb": onAddKgb(formData); break;
        case "mutasi": onAddMutasi(formData); break;
        case "pensiun": onAddPensiun(formData); break;
      }
    }
    setIsModalOpen(false);
  };

  const formatRupiah = (val: any) => {
    const num = Number(val) || 0;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const getFilteredList = (list: any[]) => {
    return list.filter((item) => {
      const matchNip = filterNip === "ALL" || item.nip === filterNip;
      
      const searchLower = searchQuery.toLowerCase();
      const matchSearch =
        searchQuery === "" ||
        (item.nama && item.nama.toLowerCase().includes(searchLower)) ||
        (item.nip && item.nip.includes(searchLower)) ||
        (item.no_sk && item.no_sk.toLowerCase().includes(searchLower)) ||
        (item.no_surat && item.no_surat.toLowerCase().includes(searchLower)) ||
        (item.jenis_cuti && item.jenis_cuti.toLowerCase().includes(searchLower)) ||
        (item.jabatan && item.jabatan.toLowerCase().includes(searchLower)) ||
        (item.pangkat && item.pangkat.toLowerCase().includes(searchLower)) ||
        (item.nama_diklat && item.nama_diklat.toLowerCase().includes(searchLower)) ||
        (item.nama_penghargaan && item.nama_penghargaan.toLowerCase().includes(searchLower));

      return matchNip && matchSearch;
    });
  };

  let activeList: any[] = [];
  let tabTitle = "";
  switch (activeSubTab) {
    case "cuti": activeList = riwayatCutiList; tabTitle = "Riwayat Cuti & Izin"; break;
    case "pangkat": activeList = riwayatPangkatList; tabTitle = "Riwayat Pangkat & Golongan"; break;
    case "jabatan": activeList = riwayatJabatanList; tabTitle = "Riwayat Jabatan"; break;
    case "diklat": activeList = riwayatDiklatList; tabTitle = "Riwayat Diklat & Pelatihan"; break;
    case "penghargaan": activeList = riwayatPenghargaanList; tabTitle = "Riwayat Penghargaan"; break;
    case "kgb": activeList = riwayatKgbList; tabTitle = "Riwayat KGB (Kenaikan Gaji Berkala)"; break;
    case "mutasi": activeList = riwayatMutasiList; tabTitle = "Riwayat Mutasi & Rotasi"; break;
    case "pensiun": activeList = riwayatPensiunList; tabTitle = "Riwayat Pensiun"; break;
  }

  const currentFiltered = getFilteredList(activeList);

  const subTabs = [
    { id: "cuti", label: "Cuti & Izin", count: riwayatCutiList.length, icon: CalendarDays },
    { id: "pangkat", label: "Pangkat / Golongan", count: riwayatPangkatList.length, icon: Shield },
    { id: "jabatan", label: "Jabatan", count: riwayatJabatanList.length, icon: Briefcase },
    { id: "diklat", label: "Diklat & Pelatihan", count: riwayatDiklatList.length, icon: GraduationCap },
    { id: "penghargaan", label: "Penghargaan", count: riwayatPenghargaanList.length, icon: Award },
    { id: "kgb", label: "KGB (Gaji Berkala)", count: riwayatKgbList.length, icon: DollarSign },
    { id: "mutasi", label: "Mutasi & Rotasi", count: riwayatMutasiList.length, icon: Users },
    { id: "pensiun", label: "Pensiun", count: riwayatPensiunList.length, icon: UserMinus },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Top filter section */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Riwayat Kepegawaian</h3>
            <p className="text-xs text-slate-500 mt-0.5">Kelola data riwayat cuti, pangkat, jabatan, diklat, penghargaan, KGB, mutasi, dan pensiun pegawai.</p>
          </div>
          <button
            onClick={handleOpenAdd}
            className={`flex items-center gap-2 px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer`}
          >
            <Plus className="w-4 h-4" />
            Tambah {subTabs.find(t => t.id === activeSubTab)?.label}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Employee search filter */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari no. SK, nama, atau jenis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 bg-white"
            />
          </div>

          {/* Employee dropdown selector */}
          <div>
            <select
              value={filterNip}
              onChange={(e) => setFilterNip(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
            >
              <option value="ALL">Semua Pegawai</option>
              {pegawaiList.map((p) => (
                <option key={p.nip} value={p.nip}>
                  {p.nama} ({p.nip})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-end text-[11px] text-slate-400 font-mono">
            Ditemukan: {currentFiltered.length} data riwayat
          </div>
        </div>
      </div>

      {/* Horizontal Sub-Tabs Slider */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-2 px-2 scrollbar-none border-b border-slate-200">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab(tab.id);
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? `${activeColors.bgLight} ${activeColors.text} border border-slate-200 shadow-2xs`
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? activeColors.textLight : "text-slate-400"}`} />
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? `${activeColors.primary} text-white` : "bg-slate-100 text-slate-600"}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="px-5 py-3">Nama Pegawai / NIP</th>
                {activeSubTab === "cuti" && (
                  <>
                    <th className="px-5 py-3">Jenis Cuti</th>
                    <th className="px-5 py-3">Tanggal Pelaksanaan</th>
                    <th className="px-5 py-3 text-center">Durasi (Hari)</th>
                    <th className="px-5 py-3">Nomor SK / Surat</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">Keterangan</th>
                  </>
                )}
                {activeSubTab === "pangkat" && (
                  <>
                    <th className="px-5 py-3">Pangkat & Golongan</th>
                    <th className="px-5 py-3">Jenis Kenaikan</th>
                    <th className="px-5 py-3">TMT Pangkat</th>
                    <th className="px-5 py-3">SK Pangkat</th>
                    <th className="px-5 py-3">Tanggal SK</th>
                    <th className="px-5 py-3">Pejabat</th>
                  </>
                )}
                {activeSubTab === "jabatan" && (
                  <>
                    <th className="px-5 py-3">Jabatan & Unit</th>
                    <th className="px-5 py-3">Jenis Jabatan</th>
                    <th className="px-5 py-3">TMT Jabatan</th>
                    <th className="px-5 py-3">Eselon</th>
                    <th className="px-5 py-3">SK Jabatan</th>
                    <th className="px-5 py-3">Penandatangan</th>
                  </>
                )}
                {activeSubTab === "diklat" && (
                  <>
                    <th className="px-5 py-3">Nama Pelatihan / Diklat</th>
                    <th className="px-5 py-3">Jenis & Penyelenggara</th>
                    <th className="px-5 py-3">Waktu Pelaksanaan</th>
                    <th className="px-5 py-3 text-center">JP (Jam)</th>
                    <th className="px-5 py-3">No. Sertifikat</th>
                  </>
                )}
                {activeSubTab === "penghargaan" && (
                  <>
                    <th className="px-5 py-3">Nama Penghargaan</th>
                    <th className="px-5 py-3">Tingkat / Jenis</th>
                    <th className="px-5 py-3 text-center">Tahun</th>
                    <th className="px-5 py-3">SK Penghargaan</th>
                    <th className="px-5 py-3">Pemberi Penghargaan</th>
                  </>
                )}
                {activeSubTab === "kgb" && (
                  <>
                    <th className="px-5 py-3">Gaji Baru</th>
                    <th className="px-5 py-3">Gaji Lama</th>
                    <th className="px-5 py-3">Golongan</th>
                    <th className="px-5 py-3">Masa Kerja</th>
                    <th className="px-5 py-3">TMT KGB</th>
                    <th className="px-5 py-3">No. Surat KGB</th>
                  </>
                )}
                {activeSubTab === "mutasi" && (
                  <>
                    <th className="px-5 py-3">Jenis Mutasi</th>
                    <th className="px-5 py-3">Asal Unit</th>
                    <th className="px-5 py-3">Tujuan Unit</th>
                    <th className="px-5 py-3">Jabatan Baru</th>
                    <th className="px-5 py-3">TMT Mutasi</th>
                    <th className="px-5 py-3">SK Mutasi</th>
                  </>
                )}
                {activeSubTab === "pensiun" && (
                  <>
                    <th className="px-5 py-3">Jenis Pensiun</th>
                    <th className="px-5 py-3">TMT Pensiun</th>
                    <th className="px-5 py-3">Golongan Terakhir</th>
                    <th className="px-5 py-3">Jabatan Terakhir</th>
                    <th className="px-5 py-3">Nomor SK Pensiun</th>
                  </>
                )}
                <th className="px-5 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {currentFiltered.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-5 py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Archive className="w-8 h-8 text-slate-300" />
                      <p className="font-semibold text-slate-500">Tidak ada data riwayat ditemukan</p>
                      <p className="text-[10px] text-slate-400">Silakan tambahkan data riwayat baru atau ubah filter pencarian Anda</p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentFiltered.map((row, idx) => {
                  // Resolve correct state index
                  const originalIndex = activeList.findIndex((x) => x.nip === row.nip && (x.no_sk === row.no_sk || x.no_surat === row.no_surat || x.tgl_mulai === row.tgl_mulai));
                  return (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3.5">
                        <p className="font-bold text-slate-900">{row.nama}</p>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">{row.nip}</p>
                      </td>

                      {activeSubTab === "cuti" && (
                        <>
                          <td className="px-5 py-3.5 font-semibold text-slate-800">{row.jenis_cuti}</td>
                          <td className="px-5 py-3.5">
                            <p className="font-medium">{row.tgl_mulai}</p>
                            <p className="text-[10px] text-slate-400">s/d {row.tgl_selesai}</p>
                          </td>
                          <td className="px-5 py-3.5 text-center font-mono font-bold text-slate-900">{row.durasi}</td>
                          <td className="px-5 py-3.5 font-mono text-[10px] text-slate-600">{row.no_sk || "-"}</td>
                          <td className="px-5 py-3.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              row.status === "Disetujui"
                                ? "bg-emerald-50 text-emerald-700"
                                : row.status === "Ditolak"
                                ? "bg-rose-50 text-rose-700"
                                : "bg-amber-50 text-amber-700"
                            }`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-slate-500 max-w-xs truncate" title={row.keterangan}>{row.keterangan || "-"}</td>
                        </>
                      )}

                      {activeSubTab === "pangkat" && (
                        <>
                          <td className="px-5 py-3.5">
                            <p className="font-semibold text-slate-800">{row.pangkat}</p>
                            <p className="text-[10px] text-slate-400 font-mono">Golongan {row.golongan}</p>
                          </td>
                          <td className="px-5 py-3.5 text-slate-600">{row.jenis_kenaikan}</td>
                          <td className="px-5 py-3.5 font-medium">{row.tmt_pangkat}</td>
                          <td className="px-5 py-3.5 font-mono text-[10px]">{row.no_sk}</td>
                          <td className="px-5 py-3.5 text-slate-500">{row.tgl_sk}</td>
                          <td className="px-5 py-3.5 text-slate-600 font-semibold">{row.pejabat}</td>
                        </>
                      )}

                      {activeSubTab === "jabatan" && (
                        <>
                          <td className="px-5 py-3.5">
                            <p className="font-semibold text-slate-800">{row.jabatan}</p>
                            <p className="text-[10px] text-slate-400">{row.unit_kerja}</p>
                          </td>
                          <td className="px-5 py-3.5 text-slate-600">{row.jenis_jabatan}</td>
                          <td className="px-5 py-3.5 font-medium">{row.tmt_jabatan}</td>
                          <td className="px-5 py-3.5 font-semibold text-slate-500">{row.eselon || "-"}</td>
                          <td className="px-5 py-3.5 font-mono text-[10px] max-w-xs truncate" title={row.no_sk}>{row.no_sk}</td>
                          <td className="px-5 py-3.5 text-slate-600">{row.pejabat || "-"}</td>
                        </>
                      )}

                      {activeSubTab === "diklat" && (
                        <>
                          <td className="px-5 py-3.5 font-semibold text-slate-800">{row.nama_diklat}</td>
                          <td className="px-5 py-3.5">
                            <p className="text-slate-700 font-medium">{row.jenis_diklat}</p>
                            <p className="text-[10px] text-slate-400">{row.penyelenggara}</p>
                          </td>
                          <td className="px-5 py-3.5">
                            <p className="font-medium">{row.tgl_mulai}</p>
                            <p className="text-[10px] text-slate-400">s/d {row.tgl_selesai}</p>
                          </td>
                          <td className="px-5 py-3.5 text-center font-mono font-semibold text-slate-900">{row.jam_pelajaran} JP</td>
                          <td className="px-5 py-3.5 font-mono text-[10px] text-slate-600">{row.no_sertifikat}</td>
                        </>
                      )}

                      {activeSubTab === "penghargaan" && (
                        <>
                          <td className="px-5 py-3.5 font-semibold text-slate-800">{row.nama_penghargaan}</td>
                          <td className="px-5 py-3.5 text-slate-600">{row.jenis_penghargaan}</td>
                          <td className="px-5 py-3.5 text-center font-bold font-mono">{row.tahun}</td>
                          <td className="px-5 py-3.5 font-mono text-[10px]">{row.no_sk}</td>
                          <td className="px-5 py-3.5 text-slate-600">{row.pemberi}</td>
                        </>
                      )}

                      {activeSubTab === "kgb" && (
                        <>
                          <td className="px-5 py-3.5 font-bold text-emerald-700">{formatRupiah(row.gapok_baru)}</td>
                          <td className="px-5 py-3.5 text-slate-400">{formatRupiah(row.gapok_lama)}</td>
                          <td className="px-5 py-3.5 font-mono text-slate-600">{row.golongan}</td>
                          <td className="px-5 py-3.5 font-medium">{row.masa_kerja}</td>
                          <td className="px-5 py-3.5 font-semibold text-slate-800">{row.tmt_kgb}</td>
                          <td className="px-5 py-3.5 font-mono text-[10px] text-slate-600" title={row.no_surat}>{row.no_surat}</td>
                        </>
                      )}

                      {activeSubTab === "mutasi" && (
                        <>
                          <td className="px-5 py-3.5"><span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-sm font-semibold">{row.jenis_mutasi}</span></td>
                          <td className="px-5 py-3.5 text-slate-600">{row.asal}</td>
                          <td className="px-5 py-3.5 font-semibold text-slate-800">→ {row.tujuan}</td>
                          <td className="px-5 py-3.5 text-slate-700 font-semibold">{row.jabatan_baru || "-"}</td>
                          <td className="px-5 py-3.5">{row.tmt_mutasi}</td>
                          <td className="px-5 py-3.5 font-mono text-[10px] text-slate-500" title={row.no_sk}>{row.no_sk}</td>
                        </>
                      )}

                      {activeSubTab === "pensiun" && (
                        <>
                          <td className="px-5 py-3.5"><span className="px-2 py-0.5 bg-rose-50 text-rose-700 rounded-sm font-semibold">{row.jenis_pensiun}</span></td>
                          <td className="px-5 py-3.5 font-bold font-mono text-rose-600">{row.tmt_pensiun}</td>
                          <td className="px-5 py-3.5 font-mono text-slate-600">{row.golongan_terakhir}</td>
                          <td className="px-5 py-3.5 text-slate-800 font-medium">{row.jabatan_terakhir}</td>
                          <td className="px-5 py-3.5 font-mono text-[10px]" title={row.no_sk}>{row.no_sk}</td>
                        </>
                      )}

                      <td className="px-5 py-3.5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEdit(originalIndex >= 0 ? originalIndex : idx, row)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 cursor-pointer transition-colors"
                            title="Ubah Data"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(originalIndex >= 0 ? originalIndex : idx)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-rose-600 cursor-pointer transition-colors"
                            title="Hapus Data"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Add / Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-lg w-full overflow-hidden my-8"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">
                    {editIndex !== null ? "Ubah Data" : "Tambah Data"} {tabTitle}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">Isi seluruh informasi mengenai riwayat administratif pegawai.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
                {/* Employee Selection */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nama Pegawai</label>
                  <select
                    value={formData.nip || ""}
                    onChange={(e) => {
                      const emp = pegawaiList.find((p) => p.nip === e.target.value);
                      setFormData({
                        ...formData,
                        nip: e.target.value,
                        nama: emp ? emp.nama : "",
                      });
                    }}
                    disabled={editIndex !== null}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white disabled:bg-slate-50 disabled:text-slate-400"
                    required
                  >
                    <option value="" disabled>-- Pilih Pegawai --</option>
                    {pegawaiList.map((p) => (
                      <option key={p.nip} value={p.nip}>
                        {p.nama} ({p.nip})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dynamic Category Fields */}
                {activeSubTab === "cuti" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jenis Cuti</label>
                        <select
                          value={formData.jenis_cuti || "Cuti Tahunan"}
                          onChange={(e) => setFormData({ ...formData, jenis_cuti: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        >
                          <option value="Cuti Tahunan">Cuti Tahunan</option>
                          <option value="Cuti Sakit">Cuti Sakit</option>
                          <option value="Cuti Melahirkan">Cuti Melahirkan</option>
                          <option value="Cuti Alasan Penting">Cuti Alasan Penting</option>
                          <option value="Cuti di Luar Tanggungan Negara">Cuti di Luar Tanggungan Negara</option>
                          <option value="Izin Terlambat">Izin Terlambat</option>
                          <option value="Izin Meninggalkan Tugas">Izin Meninggalkan Tugas</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Durasi (Hari)</label>
                        <input
                          type="number"
                          value={formData.durasi || "1"}
                          onChange={(e) => setFormData({ ...formData, durasi: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal Mulai</label>
                        <input
                          type="date"
                          value={formData.tgl_mulai || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_mulai: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal Selesai</label>
                        <input
                          type="date"
                          value={formData.tgl_selesai || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_selesai: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">No. SK / Surat Permohonan</label>
                      <input
                        type="text"
                        placeholder="Contoh: SK-CUTI/2025/123"
                        value={formData.no_sk || ""}
                        onChange={(e) => setFormData({ ...formData, no_sk: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Status Persetujuan</label>
                        <select
                          value={formData.status || "Disetujui"}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        >
                          <option value="Disetujui">Disetujui</option>
                          <option value="Ditolak">Ditolak</option>
                          <option value="Menunggu">Menunggu</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Keterangan / Alasan</label>
                      <textarea
                        rows={2}
                        placeholder="Tulis keterangan atau alasan cuti..."
                        value={formData.keterangan || ""}
                        onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      />
                    </div>
                  </div>
                )}

                {activeSubTab === "pangkat" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pangkat</label>
                        <input
                          type="text"
                          placeholder="Contoh: Penata"
                          value={formData.pangkat || ""}
                          onChange={(e) => setFormData({ ...formData, pangkat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Golongan / Ruang</label>
                        <select
                          value={formData.golongan || "III/a"}
                          onChange={(e) => setFormData({ ...formData, golongan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        >
                          {["I/a","I/b","I/c","I/d","II/a","II/b","II/c","II/d","III/a","III/b","III/c","III/d","IV/a","IV/b","IV/c","IV/d","IV/e"].map(gol => (
                            <option key={gol} value={gol}>Golongan {gol}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jenis Kenaikan</label>
                        <select
                          value={formData.jenis_kenaikan || "Kenaikan Pangkat Reguler"}
                          onChange={(e) => setFormData({ ...formData, jenis_kenaikan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        >
                          <option value="Kenaikan Pangkat Reguler">Kenaikan Pangkat Reguler</option>
                          <option value="Kenaikan Pangkat Pilihan">Kenaikan Pangkat Pilihan</option>
                          <option value="Kenaikan Pangkat Pengabdian">Kenaikan Pangkat Pengabdian</option>
                          <option value="Kenaikan Pangkat Istimewa">Kenaikan Pangkat Istimewa</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">TMT Pangkat</label>
                        <input
                          type="date"
                          value={formData.tmt_pangkat || ""}
                          onChange={(e) => setFormData({ ...formData, tmt_pangkat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nomor SK</label>
                        <input
                          type="text"
                          placeholder="823/Kep/..."
                          value={formData.no_sk || ""}
                          onChange={(e) => setFormData({ ...formData, no_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal SK</label>
                        <input
                          type="date"
                          value={formData.tgl_sk || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pejabat Penandatangan</label>
                      <input
                        type="text"
                        placeholder="Contoh: Gubernur Jawa Barat, Bupati"
                        value={formData.pejabat || ""}
                        onChange={(e) => setFormData({ ...formData, pejabat: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      />
                    </div>
                  </div>
                )}

                {activeSubTab === "jabatan" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nama Jabatan</label>
                        <input
                          type="text"
                          placeholder="Contoh: Kepala Tata Usaha"
                          value={formData.jabatan || ""}
                          onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Unit Kerja / Sub Bagian</label>
                        <input
                          type="text"
                          placeholder="Contoh: Sub Bagian Umum"
                          value={formData.unit_kerja || ""}
                          onChange={(e) => setFormData({ ...formData, unit_kerja: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jenis Jabatan</label>
                        <select
                          value={formData.jenis_jabatan || "Fungsional Tertentu"}
                          onChange={(e) => setFormData({ ...formData, jenis_jabatan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        >
                          <option value="Struktural">Struktural</option>
                          <option value="Fungsional Umum">Fungsional Umum</option>
                          <option value="Fungsional Tertentu">Fungsional Tertentu</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Eselon (Jika Struktural)</label>
                        <input
                          type="text"
                          placeholder="Contoh: IV/a, III/b atau Non-Eselon"
                          value={formData.eselon || "Non-Eselon"}
                          onChange={(e) => setFormData({ ...formData, eselon: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">TMT Jabatan</label>
                        <input
                          type="date"
                          value={formData.tmt_jabatan || ""}
                          onChange={(e) => setFormData({ ...formData, tmt_jabatan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal SK</label>
                        <input
                          type="date"
                          value={formData.tgl_sk || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nomor SK Jabatan</label>
                        <input
                          type="text"
                          placeholder="821.2/Kep..."
                          value={formData.no_sk || ""}
                          onChange={(e) => setFormData({ ...formData, no_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pejabat Penandatangan</label>
                        <input
                          type="text"
                          placeholder="Contoh: Kepala Dinas"
                          value={formData.pejabat || ""}
                          onChange={(e) => setFormData({ ...formData, pejabat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeSubTab === "diklat" && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nama Pendidikan & Pelatihan / Kursus</label>
                      <input
                        type="text"
                        placeholder="Contoh: Pelatihan Pelayanan Prima Kepegawaian"
                        value={formData.nama_diklat || ""}
                        onChange={(e) => setFormData({ ...formData, nama_diklat: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jenis Diklat</label>
                        <input
                          type="text"
                          placeholder="Contoh: Diklat Teknis / Struktural"
                          value={formData.jenis_diklat || "Diklat Teknis"}
                          onChange={(e) => setFormData({ ...formData, jenis_diklat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Penyelenggara</label>
                        <input
                          type="text"
                          placeholder="Contoh: BKN / BKPSDM"
                          value={formData.penyelenggara || ""}
                          onChange={(e) => setFormData({ ...formData, penyelenggara: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-1">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Durasi (JP)</label>
                        <input
                          type="number"
                          value={formData.jam_pelajaran || "20"}
                          onChange={(e) => setFormData({ ...formData, jam_pelajaran: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          min="1"
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tgl Mulai</label>
                        <input
                          type="date"
                          value={formData.tgl_mulai || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_mulai: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tgl Selesai</label>
                        <input
                          type="date"
                          value={formData.tgl_selesai || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_selesai: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nomor Sertifikat / STTPP</label>
                        <input
                          type="text"
                          placeholder="REG-DKL/..."
                          value={formData.no_sertifikat || ""}
                          onChange={(e) => setFormData({ ...formData, no_sertifikat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal Sertifikat</label>
                        <input
                          type="date"
                          value={formData.tgl_sertifikat || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_sertifikat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeSubTab === "penghargaan" && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nama Penghargaan / Tanda Jasa</label>
                      <input
                        type="text"
                        placeholder="Contoh: Satyalancana Karya Satya X Tahun"
                        value={formData.nama_penghargaan || ""}
                        onChange={(e) => setFormData({ ...formData, nama_penghargaan: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jenis / Tingkat</label>
                        <input
                          type="text"
                          placeholder="Contoh: Penghargaan Negara / Instansi"
                          value={formData.jenis_penghargaan || "Penghargaan Instansi"}
                          onChange={(e) => setFormData({ ...formData, jenis_penghargaan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tahun Perolehan</label>
                        <input
                          type="text"
                          placeholder="Contoh: 2025"
                          value={formData.tahun || ""}
                          onChange={(e) => setFormData({ ...formData, tahun: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nomor SK Penghargaan</label>
                        <input
                          type="text"
                          placeholder="Keppres No..."
                          value={formData.no_sk || ""}
                          onChange={(e) => setFormData({ ...formData, no_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal SK</label>
                        <input
                          type="date"
                          value={formData.tgl_sk || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pejabat / Lembaga Pemberi</label>
                      <input
                        type="text"
                        placeholder="Contoh: Presiden Republik Indonesia, Direktur Utama"
                        value={formData.pemberi || ""}
                        onChange={(e) => setFormData({ ...formData, pemberi: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        required
                      />
                    </div>
                  </div>
                )}

                {activeSubTab === "kgb" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Gaji Pokok Baru (Rp)</label>
                        <input
                          type="number"
                          placeholder="Contoh: 4500000"
                          value={formData.gapok_baru || ""}
                          onChange={(e) => setFormData({ ...formData, gapok_baru: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white font-mono font-bold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Gaji Pokok Lama (Rp)</label>
                        <input
                          type="number"
                          placeholder="Contoh: 4300000"
                          value={formData.gapok_lama || ""}
                          onChange={(e) => setFormData({ ...formData, gapok_lama: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white font-mono text-slate-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Golongan / Ruang</label>
                        <input
                          type="text"
                          placeholder="Contoh: III/b"
                          value={formData.golongan || "III/a"}
                          onChange={(e) => setFormData({ ...formData, golongan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Masa Kerja Golongan (MKG)</label>
                        <input
                          type="text"
                          placeholder="Contoh: 18 Tahun 2 Bulan"
                          value={formData.masa_kerja || ""}
                          onChange={(e) => setFormData({ ...formData, masa_kerja: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">TMT KGB</label>
                        <input
                          type="date"
                          value={formData.tmt_kgb || ""}
                          onChange={(e) => setFormData({ ...formData, tmt_kgb: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal Surat KGB</label>
                        <input
                          type="date"
                          value={formData.tgl_surat || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_surat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nomor Surat KGB</label>
                        <input
                          type="text"
                          placeholder="822/KGB-..."
                          value={formData.no_surat || ""}
                          onChange={(e) => setFormData({ ...formData, no_surat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white font-mono"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pejabat Penandatangan</label>
                        <input
                          type="text"
                          placeholder="Kepala Sub Bagian TU"
                          value={formData.pejabat || "Kepala Bagian Tata Usaha"}
                          onChange={(e) => setFormData({ ...formData, pejabat: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeSubTab === "mutasi" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jenis Mutasi / Rotasi</label>
                        <select
                          value={formData.jenis_mutasi || "Rotasi Internal"}
                          onChange={(e) => setFormData({ ...formData, jenis_mutasi: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        >
                          <option value="Rotasi Internal">Rotasi Internal (Internal)</option>
                          <option value="Mutasi Masuk">Mutasi Masuk (Dari Luar)</option>
                          <option value="Mutasi Keluar">Mutasi Keluar (Keluar Instansi)</option>
                          <option value="Promosi Jabatan">Promosi Jabatan</option>
                          <option value="Demosi Jabatan">Demosi Jabatan</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">TMT Mutasi</label>
                        <input
                          type="date"
                          value={formData.tmt_mutasi || ""}
                          onChange={(e) => setFormData({ ...formData, tmt_mutasi: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Unit/Instansi Asal</label>
                        <input
                          type="text"
                          placeholder="Contoh: Seksi Perencanaan"
                          value={formData.asal || ""}
                          onChange={(e) => setFormData({ ...formData, asal: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Unit/Instansi Tujuan</label>
                        <input
                          type="text"
                          placeholder="Contoh: Sub Bagian Umum"
                          value={formData.tujuan || ""}
                          onChange={(e) => setFormData({ ...formData, tujuan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jabatan Baru (Jika Ada)</label>
                      <input
                        type="text"
                        placeholder="Contoh: Kepala Sub Bagian"
                        value={formData.jabatan_baru || ""}
                        onChange={(e) => setFormData({ ...formData, jabatan_baru: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nomor SK Mutasi</label>
                        <input
                          type="text"
                          placeholder="824/Kep-..."
                          value={formData.no_sk || ""}
                          onChange={(e) => setFormData({ ...formData, no_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white font-mono"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal SK Mutasi</label>
                        <input
                          type="date"
                          value={formData.tgl_sk || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeSubTab === "pensiun" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jenis Pensiun</label>
                        <select
                          value={formData.jenis_pensiun || "Pensiun BUP"}
                          onChange={(e) => setFormData({ ...formData, jenis_pensiun: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        >
                          <option value="Pensiun BUP">Pensiun BUP (Batas Usia Pensiun)</option>
                          <option value="Pensiun Dini">Pensiun Dini (Atas Permintaan Sendiri)</option>
                          <option value="Pensiun Janda/Duda">Pensiun Janda/Duda</option>
                          <option value="Pensiun Cacat Fisik">Pensiun Cacat Fisik</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">TMT Pensiun</label>
                        <input
                          type="date"
                          value={formData.tmt_pensiun || ""}
                          onChange={(e) => setFormData({ ...formData, tmt_pensiun: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white font-bold text-rose-700"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Golongan Terakhir</label>
                        <input
                          type="text"
                          placeholder="Contoh: IV/a"
                          value={formData.golongan_terakhir || ""}
                          onChange={(e) => setFormData({ ...formData, golongan_terakhir: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Jabatan Terakhir</label>
                        <input
                          type="text"
                          placeholder="Contoh: Kepala Sub Bagian"
                          value={formData.jabatan_terakhir || ""}
                          onChange={(e) => setFormData({ ...formData, jabatan_terakhir: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nomor SK Pensiun</label>
                        <input
                          type="text"
                          placeholder="SK-PENSIUN/..."
                          value={formData.no_sk || ""}
                          onChange={(e) => setFormData({ ...formData, no_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white font-mono"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggal SK Pensiun</label>
                        <input
                          type="date"
                          value={formData.tgl_sk || ""}
                          onChange={(e) => setFormData({ ...formData, tgl_sk: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pejabat Penandatangan</label>
                      <input
                        type="text"
                        placeholder="Contoh: Bupati"
                        value={formData.pejabat || "Bupati"}
                        onChange={(e) => setFormData({ ...formData, pejabat: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      />
                    </div>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="p-4 border-t border-slate-100 flex justify-end gap-2 bg-slate-50 -mx-5 -mb-5 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className={`px-5 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold cursor-pointer shadow-sm transition-all`}
                  >
                    Simpan Riwayat
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DashboardView = ({
  onNavigate,
  theme = "indigo",
}: {
  onNavigate: (tab: string) => void;
  theme?: string;
}) => {
  const activeColors = THEMES[theme as keyof typeof THEMES] || THEMES.indigo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight drop-shadow-sm">Selamat Datang, Admin Utama!</h2>
          <p className="text-slate-600 text-sm mt-1 font-medium">
            SIM-TATA USAHA — Kelola seluruh administrasi, data kepegawaian, surat menyurat, dan agenda secara real-time.
          </p>
        </div>
        <div className="shrink-0">
          <LiveClock theme={theme} />
        </div>
      </div>

      {/* Quick Shortcuts */}
      <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
        <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          Pintasan Cepat Dashboard
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Kelola Pegawai", tab: "pegawai", icon: Users, color: "bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 hover:text-indigo-800" },
            { label: "Tambah Non-Pegawai", tab: "non_pegawai", icon: UserPlus, color: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100 hover:text-emerald-800" },
            { label: "Master Referensi", tab: "master_data", icon: Database, color: "bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100 hover:text-purple-800" },
            { label: "Surat Masuk", tab: "surat_masuk", icon: Mail, color: "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100 hover:text-amber-800" },
            { label: "Jadwal Agenda", tab: "agenda", icon: CalendarDays, color: "bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100 hover:text-rose-800" },
            { label: "Pengaturan Sistem", tab: "pengaturan", icon: Settings, color: "bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100 hover:text-slate-800" },
          ].map((shortcut, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(shortcut.tab)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all cursor-pointer hover:shadow-xs group ${shortcut.color}`}
            >
              <div className="p-2.5 rounded-lg bg-white shadow-xs group-hover:scale-110 transition-transform mb-2">
                <shortcut.icon className="w-5 h-5 shrink-0" />
              </div>
              <span className="text-[11px] font-bold tracking-tight">{shortcut.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Pegawai"
          value="124"
          icon={Users}
          colorClass={`${activeColors.bgLight} ${activeColors.text}`}
          trend="+2 bulan ini"
        />
        <DashboardCard
          title="Surat Masuk Baru"
          value="18"
          icon={Mail}
          colorClass="bg-amber-100 text-amber-600"
          trend="5 belum dibaca"
        />
        <DashboardCard
          title="Disposisi Aktif"
          value="12"
          icon={Send}
          colorClass="bg-emerald-100 text-emerald-600"
        />
        <DashboardCard
          title="Agenda Hari Ini"
          value="3"
          icon={CalendarDays}
          colorClass={`${activeColors.bgLight} ${activeColors.text}`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col overflow-hidden">
          <div className="p-5 border-b border-white/40 flex justify-between items-center bg-white/40">
            <h3 className="text-sm font-bold text-slate-800">Aktivitas Terkini</h3>
            <button className={`${activeColors.text} text-[11px] font-bold hover:underline`}>
              Lihat Semua
            </button>
          </div>
          <div className="p-5 space-y-4 flex-1">
            {[
              {
                icon: Mail,
                title: "Surat Baru Diterima",
                desc: "Undangan Rapat Koordinasi dari Dinas Provinsi",
                time: "10 menit yang lalu",
                color: "text-indigo-600 bg-indigo-50 border border-indigo-100",
              },
              {
                icon: CheckCircle2,
                title: "Laporan Disetujui",
                desc: "Laporan Absensi Bulan September telah disetujui",
                time: "1 jam yang lalu",
                color: "text-emerald-600 bg-emerald-50 border border-emerald-100",
              },
              {
                icon: Briefcase,
                title: "Data Pegawai Diperbarui",
                desc: "Pembaruan data jabatan atas nama Ahmad Fauzi",
                time: "3 jam yang lalu",
                color: "text-amber-600 bg-amber-50 border border-amber-100",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className={`p-2 rounded ${item.color} shrink-0`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-medium">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agenda Mendatang */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col overflow-hidden">
          <div className="p-5 border-b border-white/40 flex justify-between items-center bg-white/40">
            <h3 className="text-sm font-bold text-slate-800">Agenda Mendatang</h3>
            <button className={`${activeColors.text} text-[11px] font-bold hover:underline`}>
              Lihat Kalender
            </button>
          </div>
          <div className="p-5 space-y-4 flex-1">
            {agendaData.map((agenda, idx) => (
              <div
                key={idx}
                className="flex gap-3 items-center p-3 rounded-xl border border-white/60 bg-white/40 hover:bg-white/80 transition-colors shadow-sm"
              >
                <div className={`px-3 py-2 rounded flex flex-col items-center justify-center min-w-[50px] ${activeColors.bgLight} ${activeColors.text} border ${activeColors.borderLight}`}>
                  <p className="text-[10px] font-bold leading-none">
                    {agenda.tanggal.split(" ")[0]}
                  </p>
                  <p className="text-[8px] uppercase mt-1 opacity-70">
                    {agenda.tanggal.split(" ")[1]}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    {agenda.acara}
                  </h4>
                  <div className="flex items-center text-[10px] text-slate-400 mt-1 gap-2">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" /> {agenda.waktu}
                    </span>
                    <span className="flex items-center gap-1">
                      <LayoutDashboard className="w-3 h-3" /> {agenda.lokasi}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PengaturanView = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6 max-w-3xl"
  >
    <div>
      <h2 className="text-lg font-bold text-slate-800">Pengaturan Sistem</h2>
      <p className="text-slate-500 text-sm mt-1">
        Kelola konfigurasi dan preferensi aplikasi
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100">
        <h3 className="font-bold text-slate-800 text-sm">Profil Instansi</h3>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Informasi utama mengenai instansi atau organisasi Anda.
        </p>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Nama Instansi
          </label>
          <input
            type="text"
            defaultValue="Dinas Tata Usaha Provinsi"
            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Alamat Lengkap
          </label>
          <textarea
            rows={3}
            defaultValue="Jl. Jendral Sudirman No. 123, Gedung Perkantoran A, Lantai 4"
            className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm"
          ></textarea>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Email Kontak
            </label>
            <input
              type="email"
              defaultValue="admin@tuprovinsi.go.id"
              className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              No. Telepon
            </label>
            <input
              type="text"
              defaultValue="(021) 555-0123"
              className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-bold transition-colors">
          Simpan Perubahan
        </button>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100">
        <h3 className="font-bold text-slate-800 text-sm">Keamanan</h3>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Perbarui PIN akses untuk keamanan sistem.
        </p>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            PIN Saat Ini
          </label>
          <input
            type="password"
            placeholder="Masukkan PIN saat ini"
            className="w-full sm:w-1/2 px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            PIN Baru
          </label>
          <input
            type="password"
            placeholder="Masukkan PIN baru"
            className="w-full sm:w-1/2 px-3 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-sm"
          />
        </div>
      </div>
      <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-bold transition-colors">
          Perbarui PIN
        </button>
      </div>
    </div>
  </motion.div>
);

const ArsipDigitalView = ({
  arsipList,
  onAdd,
  onEdit,
  onDelete,
  onSoftDelete,
  onRestore,
  theme = "indigo",
}: {
  arsipList: any[];
  onAdd: (item: any) => void;
  onEdit: (idx: number, item: any) => void;
  onDelete: (idx: number) => void;
  onSoftDelete: (idx: number) => void;
  onRestore: (idx: number) => void;
  theme?: string;
}) => {
  const activeColors = THEMES[theme as keyof typeof THEMES] || THEMES.indigo;
  const [activeSubTab, setActiveSubTab] = useState("active"); // "active", "archived"
  const [selectedJenis, setSelectedJenis] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Form State
  const [formData, setFormData] = useState({
    jenis_naskah: "Surat Keputusan",
    nama_dokumen: "",
    judul_isi_ringkas: "",
    nomor_dokumen: "",
    tanggal_pembuatan: "",
    unit_pengelola: "",
    file_name: "",
  });

  const [dragActive, setDragActive] = useState(false);

  const jenisNaskahOptions = [
    "Surat Perjanjian Kerjasama",
    "Surat Keputusan",
    "Peraturan Direktur",
    "Instruksi Direktur",
    "Standar Prosedur Operasional (SPO)",
    "Naskah Dinas Penting",
    "Akreditasi",
    "Legal"
  ];

  const handleOpenAdd = () => {
    setEditIndex(null);
    setFormData({
      jenis_naskah: "Surat Keputusan",
      nama_dokumen: "",
      judul_isi_ringkas: "",
      nomor_dokumen: "",
      tanggal_pembuatan: "",
      unit_pengelola: "",
      file_name: "",
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (index: number, item: any) => {
    setEditIndex(index);
    setFormData({
      jenis_naskah: item.jenis_naskah || "Surat Keputusan",
      nama_dokumen: item.nama_dokumen || "",
      judul_isi_ringkas: item.judul_isi_ringkas || "",
      nomor_dokumen: item.nomor_dokumen || "",
      tanggal_pembuatan: item.tanggal_pembuatan || "",
      unit_pengelola: item.unit_pengelola || "",
      file_name: item.file_name || "",
    });
    setIsModalOpen(true);
  };

  const handleOpenDetail = (item: any) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        file_name: files[0].name,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        file_name: files[0].name,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.jenis_naskah ||
      !formData.nama_dokumen ||
      !formData.judul_isi_ringkas ||
      !formData.nomor_dokumen ||
      !formData.tanggal_pembuatan ||
      !formData.unit_pengelola
    ) {
      alert("Harap lengkapi semua data wajib!");
      return;
    }

    const newItem = {
      ...formData,
      id: editIndex !== null ? arsipList[editIndex].id : "arsip-" + Date.now(),
      is_archived: editIndex !== null ? arsipList[editIndex].is_archived : false,
    };

    if (editIndex !== null) {
      onEdit(editIndex, newItem);
    } else {
      onAdd(newItem);
    }
    setIsModalOpen(false);
  };

  // Filter based on subtab, search query & category selection
  const filteredArsip = arsipList.filter((item) => {
    const isArchivedMatch = activeSubTab === "archived" ? item.is_archived : !item.is_archived;
    const isCategoryMatch = selectedJenis === "ALL" || item.jenis_naskah === selectedJenis;
    
    const searchLower = searchQuery.toLowerCase();
    const matchSearch =
      searchQuery === "" ||
      (item.nama_dokumen && item.nama_dokumen.toLowerCase().includes(searchLower)) ||
      (item.nomor_dokumen && item.nomor_dokumen.toLowerCase().includes(searchLower)) ||
      (item.judul_isi_ringkas && item.judul_isi_ringkas.toLowerCase().includes(searchLower)) ||
      (item.unit_pengelola && item.unit_pengelola.toLowerCase().includes(searchLower));

    return isArchivedMatch && isCategoryMatch && matchSearch;
  });

  const getBadgeStyle = (jenis: string) => {
    switch (jenis) {
      case "Surat Perjanjian Kerjasama": return "bg-teal-50 text-teal-700 border border-teal-150";
      case "Surat Keputusan": return "bg-indigo-50 text-indigo-700 border border-indigo-150";
      case "Peraturan Direktur": return "bg-sky-50 text-sky-700 border border-sky-150";
      case "Instruksi Direktur": return "bg-rose-50 text-rose-700 border border-rose-150";
      case "Standar Prosedur Operasional (SPO)": return "bg-amber-50 text-amber-700 border border-amber-150";
      case "Naskah Dinas Penting": return "bg-purple-50 text-purple-700 border border-purple-150";
      case "Akreditasi": return "bg-emerald-50 text-emerald-700 border border-emerald-150";
      case "Legal": return "bg-slate-100 text-slate-700 border border-slate-200";
      default: return "bg-slate-50 text-slate-600 border border-slate-150";
    }
  };

  return (
    <div className="space-y-6">
      {/* Upper header action block */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">Arsip Digital</h3>
          <p className="text-xs text-slate-500 mt-0.5">Sistem penyimpanan digital, manajemen naskah, keputusan, perjanjian, dan SPO secara terpadu.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Add New Document button */}
          <button
            onClick={handleOpenAdd}
            className={`flex items-center gap-1.5 px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer`}
          >
            <Plus className="w-4 h-4" />
            Tambah Arsip Baru
          </button>
        </div>
      </div>

      {/* Categories slider & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-2">
        {/* Horizontal Category Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-2 px-2 scrollbar-none">
          <button
            onClick={() => setSelectedJenis("ALL")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedJenis === "ALL"
                ? `${activeColors.bgLight} ${activeColors.text} border border-slate-100 shadow-2xs`
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            Semua Dokumen
            <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[10px]">
              {arsipList.filter(k => activeSubTab === "archived" ? k.is_archived : !k.is_archived).length}
            </span>
          </button>

          {jenisNaskahOptions.map((jenis) => {
            const count = arsipList.filter(k => k.jenis_naskah === jenis && (activeSubTab === "archived" ? k.is_archived : !k.is_archived)).length;
            const isActive = selectedJenis === jenis;
            return (
              <button
                key={jenis}
                onClick={() => setSelectedJenis(jenis)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? `${activeColors.bgLight} ${activeColors.text} border border-slate-100 shadow-2xs`
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {jenis}
                {count > 0 && (
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? "bg-white text-indigo-700" : "bg-slate-100 text-slate-600"}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Global Search Bar & Trash Sub-tabs */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg">
            <button
              onClick={() => setActiveSubTab("active")}
              className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${activeSubTab === "active" ? "bg-white text-slate-800 shadow-3xs" : "text-slate-500 hover:text-slate-700"}`}
            >
              Aktif
            </button>
            <button
              onClick={() => setActiveSubTab("archived")}
              className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${activeSubTab === "archived" ? "bg-white text-slate-800 shadow-3xs" : "text-slate-500 hover:text-slate-700"}`}
            >
              Arsip Sampah ({arsipList.filter(k => k.is_archived).length})
            </button>
          </div>

          <div className="relative w-48 sm:w-56">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari arsip digital..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Documents List/Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="px-5 py-3.5">Nama & Nomor Dokumen</th>
                <th className="px-5 py-3.5">Jenis Naskah</th>
                <th className="px-5 py-3.5">Tanggal Pembuatan</th>
                <th className="px-5 py-3.5">Unit Pengelola</th>
                <th className="px-5 py-3.5">Berkas Lampiran</th>
                <th className="px-5 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {filteredArsip.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Archive className="w-10 h-10 text-slate-300" />
                      <p className="font-extrabold text-slate-500">Tidak ada dokumen arsip ditemukan</p>
                      <p className="text-[10px] text-slate-400">Silakan ubah kategori pencarian atau tambahkan dokumen baru.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredArsip.map((item) => {
                  const originalIndex = arsipList.findIndex((x) => x.id === item.id);
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-4 max-w-xs">
                        <div className="font-bold text-slate-900 truncate" title={item.nama_dokumen}>
                          {item.nama_dokumen}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate" title={item.nomor_dokumen}>
                          No: {item.nomor_dokumen}
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getBadgeStyle(item.jenis_naskah)}`}>
                          {item.jenis_naskah}
                        </span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap font-medium text-slate-600">
                        {item.tanggal_pembuatan ? new Date(item.tanggal_pembuatan).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        }) : "-"}
                      </td>
                      <td className="px-5 py-4 text-slate-600 font-semibold">{item.unit_pengelola}</td>
                      <td className="px-5 py-4 max-w-[150px] truncate">
                        {item.file_name ? (
                          <div className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-150 px-2 py-1 rounded text-emerald-700 font-bold text-[10px] max-w-full truncate">
                            <FileText className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate" title={item.file_name}>{item.file_name}</span>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic text-[10px]">Tanpa File</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenDetail(item)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 cursor-pointer transition-colors"
                            title="Buka Detail (Jendela Mengembang)"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleOpenEdit(originalIndex, item)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 cursor-pointer transition-colors"
                            title="Ubah Arsip"
                          >
                            <Edit className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => {
                              if (item.is_archived) {
                                onRestore(originalIndex);
                              } else {
                                onSoftDelete(originalIndex);
                              }
                            }}
                            className="p-1 hover:bg-slate-100 rounded text-amber-500 hover:text-amber-700 cursor-pointer transition-colors"
                            title={item.is_archived ? "Pulihkan dari Arsip Sampah" : "Pindahkan ke Arsip Sampah (Soft Delete)"}
                          >
                            <Archive className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onDelete(originalIndex)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-rose-600 cursor-pointer transition-colors"
                            title="Hapus Permanen"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Add/Edit Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-lg w-full overflow-hidden my-8"
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">
                    {editIndex !== null ? "Ubah Arsip Dokumen Digital" : "Tambah Arsip Dokumen Digital"}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">Silakan isi formulir arsip digital di bawah ini.</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Jenis Naskah <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.jenis_naskah}
                      onChange={(e) => setFormData({ ...formData, jenis_naskah: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      required
                    >
                      {jenisNaskahOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Nomor Dokumen <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: 123/SK/DIR/2026"
                      value={formData.nomor_dokumen}
                      onChange={(e) => setFormData({ ...formData, nomor_dokumen: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Nama Dokumen <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Surat Keputusan Struktur Organisasi"
                    value={formData.nama_dokumen}
                    onChange={(e) => setFormData({ ...formData, nama_dokumen: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Tanggal Pembuatan <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.tanggal_pembuatan}
                      onChange={(e) => setFormData({ ...formData, tanggal_pembuatan: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Unit Pengelola <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Sub Bagian Tata Usaha"
                      value={formData.unit_pengelola}
                      onChange={(e) => setFormData({ ...formData, unit_pengelola: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Judul / Isi Ringkas <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tuliskan isi ringkas atau ringkasan penting dari naskah..."
                    value={formData.judul_isi_ringkas}
                    onChange={(e) => setFormData({ ...formData, judul_isi_ringkas: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                    required
                  />
                </div>

                {/* Upload File with Drag & Drop */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    File Lampiran Dokumen
                  </label>
                  
                  {formData.file_name ? (
                    <div className="flex items-center justify-between p-3 border border-emerald-200 bg-emerald-50 rounded-xl text-xs text-emerald-800">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-extrabold truncate text-[11px]">{formData.file_name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, file_name: "" })}
                        className="text-rose-600 hover:text-rose-800 font-bold ml-2 text-[10px] shrink-0 cursor-pointer"
                      >
                        Hapus Berkas
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`flex flex-col items-center justify-center py-6 px-4 border-2 border-dashed rounded-xl cursor-pointer transition-all text-center ${
                        dragActive
                          ? "border-indigo-400 bg-indigo-50/20"
                          : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <Upload className="w-6 h-6 text-slate-400 mb-2" />
                      <p className="text-[11px] text-slate-600 font-bold">
                        Seret dan taruh berkas dokumen Anda ke sini, atau
                      </p>
                      <label className="mt-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[10px] font-bold cursor-pointer transition-all">
                        Pilih Berkas Dokumen
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      <p className="text-[9px] text-slate-400 mt-1.5 font-medium">
                        Mendukung PDF, Word, Excel, Gambar hingga 10MB
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit */}
                <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className={`px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer`}
                  >
                    {editIndex !== null ? "Simpan Perubahan" : "Simpan Dokumen Arsip"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Detail Jendela Mengembang (Slide Over or Centered Modal) */}
      <AnimatePresence>
        {isDetailOpen && selectedItem && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className={`p-4 ${activeColors.primary} text-white flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                  <Archive className="w-5 h-5 text-white/95" />
                  <div>
                    <h4 className="font-extrabold text-sm tracking-tight text-white">Detail Naskah Digital</h4>
                    <span className="text-[10px] text-white/80 font-mono">ID Dokumen: {selectedItem.id}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg text-white/90 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Nama Dokumen</span>
                  <h3 className="text-sm font-extrabold text-slate-900 leading-tight">{selectedItem.nama_dokumen}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-3">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Jenis Naskah</span>
                    <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-extrabold mt-0.5 ${getBadgeStyle(selectedItem.jenis_naskah)}`}>
                      {selectedItem.jenis_naskah}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Nomor Dokumen</span>
                    <p className="font-bold text-slate-800 mt-0.5 font-mono text-[11px]">{selectedItem.nomor_dokumen}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Tanggal Pembuatan</span>
                    <p className="font-bold text-slate-800 mt-0.5">
                      {selectedItem.tanggal_pembuatan ? new Date(selectedItem.tanggal_pembuatan).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }) : "-"}
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Unit Pengelola</span>
                    <p className="font-bold text-slate-800 mt-0.5">{selectedItem.unit_pengelola}</p>
                  </div>
                </div>

                <div className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Judul / Isi Ringkas Naskah</span>
                  <p className="text-slate-600 font-medium whitespace-pre-wrap leading-relaxed mt-1">
                    {selectedItem.judul_isi_ringkas || "Tidak ada rincian ringkas."}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Lampiran Digital</span>
                  {selectedItem.file_name ? (
                    <div className="flex items-center justify-between p-3.5 border border-slate-100 bg-slate-50/50 rounded-xl">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-5 h-5 text-indigo-500 shrink-0" />
                        <div>
                          <p className="font-extrabold text-slate-800 truncate max-w-[180px]">{selectedItem.file_name}</p>
                          <p className="text-[9px] text-slate-400">Arsip Digital Lampiran Terunggah</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          alert(`Mengunduh berkas lampiran: ${selectedItem.file_name}`);
                        }}
                        className={`px-3 py-1.5 ${activeColors.bgLight} ${activeColors.text} hover:opacity-90 rounded-lg text-[10px] font-bold border border-slate-100 cursor-pointer transition-all`}
                      >
                        Unduh Berkas
                      </button>
                    </div>
                  ) : (
                    <p className="text-slate-400 italic text-[10px]">Tidak ada lampiran dokumen digital yang diunggah.</p>
                  )}
                </div>

                {/* Footer action */}
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setIsDetailOpen(false)}
                    className={`px-4 py-2 ${activeColors.primary} ${activeColors.hover} text-white rounded-lg text-xs font-bold transition-colors cursor-pointer`}
                  >
                    Tutup Jendela Detail
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN APPLICATION LAYOUT ---

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [themeSearch, setThemeSearch] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedSubItem, setSelectedSubItem] = useState<any>(null);
  const [feedbackForm, setFeedbackForm] = useState({ name: "", email: "", message: "" });
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [landingSearch, setLandingSearch] = useState("");
  const [landingDropdown, setLandingDropdown] = useState<string | null>(null);
  const [isLandingMobileMenuOpen, setIsLandingMobileMenuOpen] = useState(false);

  // Stateful Master Data Store for all 29 categories
  const [masterDataStore, setMasterDataStore] = useState(INITIAL_MASTER_DATA);
  const [selectedMasterCategory, setSelectedMasterCategory] =
    useState("pangkat_golongan");

  // Stateful Theme Settings
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = sessionStorage.getItem("tu_theme");
      if (savedTheme && ["indigo", "emerald", "slate", "amber", "rose", "sky", "teal", "violet", "red", "pink"].includes(savedTheme)) {
        return savedTheme;
      }
    }
    return "indigo";
  });

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    sessionStorage.setItem("tu_theme", newTheme);
  };

  // Derive active colors based on theme state
  const activeColors = THEMES[theme as keyof typeof THEMES] || THEMES.indigo;

  // Stateful Pegawai List
  const [pegawaiList, setPegawaiList] = useState(INITIAL_PEGAWAI_LIST);

  const handleAddPegawai = (item: any) => {
    setPegawaiList((prev) => [...prev, item]);
  };

  const handleEditPegawai = (index: number, updatedItem: any) => {
    setPegawaiList((prev) => {
      const copy = [...prev];
      copy[index] = updatedItem;
      return copy;
    });
  };

  const handleDeletePegawai = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data pegawai ini?")) {
      setPegawaiList((prev) => {
        const copy = [...prev];
        copy.splice(index, 1);
        return copy;
      });
    }
  };

  // Stateful Non-Pegawai List
  const [nonPegawaiList, setNonPegawaiList] = useState(INITIAL_NON_PEGAWAI_LIST);

  const handleAddNonPegawai = (item: any) => {
    setNonPegawaiList((prev) => [...prev, item]);
  };

  const handleEditNonPegawai = (index: number, updatedItem: any) => {
    setNonPegawaiList((prev) => {
      const copy = [...prev];
      copy[index] = updatedItem;
      return copy;
    });
  };

  const handleDeleteNonPegawai = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data non-pegawai ini?")) {
      setNonPegawaiList((prev) => {
        const copy = [...prev];
        copy.splice(index, 1);
        return copy;
      });
    }
  };

  // Stateful Riwayat Cuti
  const [riwayatCutiList, setRiwayatCutiList] = useState(INITIAL_RIWAYAT_CUTI);
  const handleAddCuti = (item: any) => setRiwayatCutiList((prev) => [...prev, item]);
  const handleEditCuti = (index: number, updated: any) => setRiwayatCutiList((prev) => {
    const copy = [...prev];
    copy[index] = updated;
    return copy;
  });
  const handleDeleteCuti = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data riwayat cuti ini?")) {
      setRiwayatCutiList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Stateful Riwayat Pangkat
  const [riwayatPangkatList, setRiwayatPangkatList] = useState(INITIAL_RIWAYAT_PANGKAT);
  const handleAddPangkat = (item: any) => setRiwayatPangkatList((prev) => [...prev, item]);
  const handleEditPangkat = (index: number, updated: any) => setRiwayatPangkatList((prev) => {
    const copy = [...prev];
    copy[index] = updated;
    return copy;
  });
  const handleDeletePangkat = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data riwayat pangkat ini?")) {
      setRiwayatPangkatList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Stateful Riwayat Jabatan
  const [riwayatJabatanList, setRiwayatJabatanList] = useState(INITIAL_RIWAYAT_JABATAN);
  const handleAddJabatan = (item: any) => setRiwayatJabatanList((prev) => [...prev, item]);
  const handleEditJabatan = (index: number, updated: any) => setRiwayatJabatanList((prev) => {
    const copy = [...prev];
    copy[index] = updated;
    return copy;
  });
  const handleDeleteJabatan = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data riwayat jabatan ini?")) {
      setRiwayatJabatanList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Stateful Riwayat Diklat
  const [riwayatDiklatList, setRiwayatDiklatList] = useState(INITIAL_RIWAYAT_DIKLAT);
  const handleAddDiklat = (item: any) => setRiwayatDiklatList((prev) => [...prev, item]);
  const handleEditDiklat = (index: number, updated: any) => setRiwayatDiklatList((prev) => {
    const copy = [...prev];
    copy[index] = updated;
    return copy;
  });
  const handleDeleteDiklat = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data riwayat diklat ini?")) {
      setRiwayatDiklatList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Stateful Riwayat Penghargaan
  const [riwayatPenghargaanList, setRiwayatPenghargaanList] = useState(INITIAL_RIWAYAT_PENGHARGAAN);
  const handleAddPenghargaan = (item: any) => setRiwayatPenghargaanList((prev) => [...prev, item]);
  const handleEditPenghargaan = (index: number, updated: any) => setRiwayatPenghargaanList((prev) => {
    const copy = [...prev];
    copy[index] = updated;
    return copy;
  });
  const handleDeletePenghargaan = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data riwayat penghargaan ini?")) {
      setRiwayatPenghargaanList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Stateful Riwayat KGB
  const [riwayatKgbList, setRiwayatKgbList] = useState(INITIAL_RIWAYAT_KGB);
  const handleAddKgb = (item: any) => setRiwayatKgbList((prev) => [...prev, item]);
  const handleEditKgb = (index: number, updated: any) => setRiwayatKgbList((prev) => {
    const copy = [...prev];
    copy[index] = updated;
    return copy;
  });
  const handleDeleteKgb = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data riwayat KGB ini?")) {
      setRiwayatKgbList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Stateful Riwayat Mutasi
  const [riwayatMutasiList, setRiwayatMutasiList] = useState(INITIAL_RIWAYAT_MUTASI);
  const handleAddMutasi = (item: any) => setRiwayatMutasiList((prev) => [...prev, item]);
  const handleEditMutasi = (index: number, updated: any) => setRiwayatMutasiList((prev) => {
    const copy = [...prev];
    copy[index] = updated;
    return copy;
  });
  const handleDeleteMutasi = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data riwayat mutasi ini?")) {
      setRiwayatMutasiList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Stateful Riwayat Pensiun
  const [riwayatPensiunList, setRiwayatPensiunList] = useState(INITIAL_RIWAYAT_PENSIUN);
  const handleAddPensiun = (item: any) => setRiwayatPensiunList((prev) => [...prev, item]);
  const handleEditPensiun = (index: number, updated: any) => setRiwayatPensiunList((prev) => {
    const copy = [...prev];
    copy[index] = updated;
    return copy;
  });
  const handleDeletePensiun = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data riwayat pensiun ini?")) {
      setRiwayatPensiunList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // --- STATEFUL AGENDA PIMPINAN CRUD ---
  const [agendaList, setAgendaList] = useState(() => {
    return [
      {
        id: "ag-1",
        judul: "Rapat Evaluasi Capaian Kinerja Triwulan II",
        waktu_mulai: "2026-06-26T09:00",
        waktu_selesai: "2026-06-26T11:30",
        pic: "Sekretaris Daerah",
        keterangan: "Evaluasi capaian kinerja pembangunan triwulanan tingkat daerah, dihadiri oleh seluruh kepala dinas.",
        is_archived: false,
      },
      {
        id: "ag-2",
        judul: "Kunjungan Kerja Anggota Komisi II DPR RI",
        waktu_mulai: "2026-06-27T13:00",
        waktu_selesai: "2026-06-27T15:30",
        pic: "Bagian Protokol & Humas",
        keterangan: "Audiensi bersama pimpinan daerah mengenai efektivitas pelayanan publik dan administrasi kepemerintahan.",
        is_archived: false,
      },
      {
        id: "ag-3",
        judul: "Briefing Pagi Rutin Tata Usaha",
        waktu_mulai: "2026-06-22T08:00",
        waktu_selesai: "2026-06-22T09:30",
        pic: "Kasubag Kepegawaian",
        keterangan: "Koordinasi mingguan tugas kedinasan internal sub-bagian umum dan administrasi.",
        is_archived: false,
      }
    ];
  });

  const handleAddAgenda = (item: any) => {
    setAgendaList((prev) => [...prev, item]);
  };

  const handleEditAgenda = (index: number, updatedItem: any) => {
    setAgendaList((prev) => {
      const copy = [...prev];
      copy[index] = updatedItem;
      return copy;
    });
  };

  const handleDeleteAgenda = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus agenda pimpinan ini secara permanen?")) {
      setAgendaList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSoftDeleteAgenda = (index: number) => {
    setAgendaList((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], is_archived: true };
      return copy;
    });
  };

  const handleRestoreAgenda = (index: number) => {
    setAgendaList((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], is_archived: false };
      return copy;
    });
  };


  // --- STATEFUL KONTAK RELASI CRUD ---
  const [kontakList, setKontakList] = useState(() => {
    return [
      {
        id: "kr-1",
        kategori: "Instansi Pemerintah",
        nama_instansi: "Dinas Kesehatan Kota",
        nama_kontak: "dr. Andi Wijaya, M.Kes",
        jabatan: "Kepala Dinas Kesehatan",
        alamat: "Jl. Kesehatan No. 45, Kota Bandung",
        telepon: "022-4201234",
        faxmile: "022-4201235",
        whatsapp: "081122334455",
        email: "info@dinkes.bandung.go.id",
        website: "https://dinkes.bandung.go.id",
        catatan: "Kontak utama koordinasi vaksinasi, perizinan, dan program kesehatan daerah.",
        is_archived: false,
      },
      {
        id: "kr-2",
        kategori: "Perusahaan/Vendor",
        nama_instansi: "PT. IT Solusindo Pratama",
        nama_kontak: "Bpk. Hendra Kurniawan",
        jabatan: "Key Account Manager",
        alamat: "Suryalaya Regency Blok C-10, Buahbatu, Bandung",
        telepon: "021-88997766",
        faxmile: "021-88997767",
        whatsapp: "085566778899",
        email: "hendra@itsolusindo.com",
        website: "https://itsolusindo.com",
        catatan: "Penyedia lisensi software SIM-TU dan penanggung jawab maintenance server utama.",
        is_archived: false,
      },
      {
        id: "kr-3",
        kategori: "Rumah Sakit/Puskesmas",
        nama_instansi: "RSUD Al-Ihsan",
        nama_kontak: "Ibu Rina Sulaeman, S.Kep",
        jabatan: "Kabid Humas & Pemasaran",
        alamat: "Jl. Kolonel Masturi No. 12, Bandung Barat",
        telepon: "022-5940872",
        faxmile: "022-5940873",
        whatsapp: "081234567890",
        email: "humas@rsudalihsan.co.id",
        website: "https://rsudalihsan.co.id",
        catatan: "Koordinasi pemeriksaan kesehatan berkala bagi ASN/Pegawai sub-bagian umum.",
        is_archived: false,
      }
    ];
  });

  const handleAddKontak = (item: any) => {
    setKontakList((prev) => [...prev, item]);
  };

  const handleEditKontak = (index: number, updatedItem: any) => {
    setKontakList((prev) => {
      const copy = [...prev];
      copy[index] = updatedItem;
      return copy;
    });
  };

  const handleDeleteKontak = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus kontak relasi ini secara permanen?")) {
      setKontakList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSoftDeleteKontak = (index: number) => {
    setKontakList((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], is_archived: true };
      return copy;
    });
  };

  const handleRestoreKontak = (index: number) => {
    setKontakList((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], is_archived: false };
      return copy;
    });
  };

  // --- STATEFUL ARSIP DIGITAL CRUD ---
  const [arsipList, setArsipList] = useState(() => {
    return [
      {
        id: "arsip-1",
        jenis_naskah: "Surat Keputusan",
        nama_dokumen: "SK Pengangkatan Pegawai Baru 2026",
        judul_isi_ringkas: "Surat Keputusan Direktur tentang pengangkatan pegawai/staf administratif baru di lingkungan sub-bagian Tata Usaha untuk tahun anggaran 2026.",
        nomor_dokumen: "800/SK-024/TU-2026",
        tanggal_pembuatan: "2026-01-15",
        unit_pengelola: "Sub Bagian Umum & Kepegawaian",
        file_name: "SK_Pengangkatan_Staf_2026.pdf",
        is_archived: false,
      },
      {
        id: "arsip-2",
        jenis_naskah: "Surat Perjanjian Kerjasama",
        nama_dokumen: "PKS Layanan Konektivitas Digital",
        judul_isi_ringkas: "Perjanjian Kerjasama dengan PT Telkomsel Indonesia mengenai penyediaan jaringan internet broadband dan VPN khusus untuk kelancaran layanan SIM-TU.",
        nomor_dokumen: "120/PKS/DIR-VIII/2025",
        tanggal_pembuatan: "2025-08-10",
        unit_pengelola: "Sub Bagian Perencanaan & IT",
        file_name: "PKS_Telkomsel_Broadband.pdf",
        is_archived: false,
      },
      {
        id: "arsip-3",
        jenis_naskah: "Standar Prosedur Operasional (SPO)",
        nama_dokumen: "SPO Alur Disposisi Surat Cepat",
        judul_isi_ringkas: "Standar operasional prosedur pengarsipan dan pendistribusian lembar disposisi surat pimpinan dalam kurun waktu kurang dari 30 menit sejak surat masuk.",
        nomor_dokumen: "SPO-TU-002-REV1",
        tanggal_pembuatan: "2026-03-05",
        unit_pengelola: "Sub Bagian Tata Usaha",
        file_name: "SPO_Alur_Disposisi_Cepat_v2.pdf",
        is_archived: false,
      }
    ];
  });

  const handleAddArsip = (item: any) => {
    setArsipList((prev) => [...prev, item]);
  };

  const handleEditArsip = (index: number, updatedItem: any) => {
    setArsipList((prev) => {
      const copy = [...prev];
      copy[index] = updatedItem;
      return copy;
    });
  };

  const handleDeleteArsip = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data arsip digital ini secara permanen?")) {
      setArsipList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSoftDeleteArsip = (index: number) => {
    setArsipList((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], is_archived: true };
      return copy;
    });
  };

  const handleRestoreArsip = (index: number) => {
    setArsipList((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], is_archived: false };
      return copy;
    });
  };

  const handleMasterAddItem = (
    categoryKey: string,
    item: { kode: string; nama: string; keterangan: string },
  ) => {
    setMasterDataStore((prev) => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        items: [...prev[categoryKey].items, item],
      },
    }));
  };

  const handleMasterEditItem = (
    categoryKey: string,
    index: number,
    updatedItem: { kode: string; nama: string; keterangan: string },
  ) => {
    setMasterDataStore((prev) => {
      const items = [...prev[categoryKey].items];
      items[index] = updatedItem;
      return {
        ...prev,
        [categoryKey]: {
          ...prev[categoryKey],
          items,
        },
      };
    });
  };

  const handleMasterDeleteItem = (categoryKey: string, index: number) => {
    setMasterDataStore((prev) => {
      const items = [...prev[categoryKey].items];
      items.splice(index, 1);
      return {
        ...prev,
        [categoryKey]: {
          ...prev[categoryKey],
          items,
        },
      };
    });
  };

  useEffect(() => {
    const isAuth = sessionStorage.getItem("tu_auth") === "true";
    const timer = setTimeout(() => {
      if (isAuth) {
        setIsAuthenticated(true);
      }
      setIsChecking(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "123456") {
      sessionStorage.setItem("tu_auth", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("PIN yang Anda masukkan salah. Silakan coba lagi.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("tu_auth");
    setIsAuthenticated(false);
    setPin("");
    setActiveTab("dashboard");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView onNavigate={(tab) => setActiveTab(tab)} theme={theme} />;
      case "master_data":
        return (
          <MasterDataView
            store={masterDataStore}
            selectedCategory={selectedMasterCategory}
            onChangeCategory={setSelectedMasterCategory}
            onAddItem={handleMasterAddItem}
            onEditItem={handleMasterEditItem}
            onDeleteItem={handleMasterDeleteItem}
          />
        );
      case "pegawai":
        return (
          <PegawaiView
            pegawaiList={pegawaiList}
            onAddPegawai={handleAddPegawai}
            onEditPegawai={handleEditPegawai}
            onDeletePegawai={handleDeletePegawai}
            masterDataStore={masterDataStore}
            theme={theme}
          />
        );
      case "non_pegawai":
        return (
          <NonPegawaiView
            nonPegawaiList={nonPegawaiList}
            onAddNonPegawai={handleAddNonPegawai}
            onEditNonPegawai={handleEditNonPegawai}
            onDeleteNonPegawai={handleDeleteNonPegawai}
            masterDataStore={masterDataStore}
            theme={theme}
          />
        );
      case "riwayat":
        return (
          <RiwayatPegawaiView
            pegawaiList={pegawaiList}
            riwayatCutiList={riwayatCutiList}
            onAddCuti={handleAddCuti}
            onEditCuti={handleEditCuti}
            onDeleteCuti={handleDeleteCuti}
            riwayatPangkatList={riwayatPangkatList}
            onAddPangkat={handleAddPangkat}
            onEditPangkat={handleEditPangkat}
            onDeletePangkat={handleDeletePangkat}
            riwayatJabatanList={riwayatJabatanList}
            onAddJabatan={handleAddJabatan}
            onEditJabatan={handleEditJabatan}
            onDeleteJabatan={handleDeleteJabatan}
            riwayatDiklatList={riwayatDiklatList}
            onAddDiklat={handleAddDiklat}
            onEditDiklat={handleEditDiklat}
            onDeleteDiklat={handleDeleteDiklat}
            riwayatPenghargaanList={riwayatPenghargaanList}
            onAddPenghargaan={handleAddPenghargaan}
            onEditPenghargaan={handleEditPenghargaan}
            onDeletePenghargaan={handleDeletePenghargaan}
            riwayatKgbList={riwayatKgbList}
            onAddKgb={handleAddKgb}
            onEditKgb={handleEditKgb}
            onDeleteKgb={handleDeleteKgb}
            riwayatMutasiList={riwayatMutasiList}
            onAddMutasi={handleAddMutasi}
            onEditMutasi={handleEditMutasi}
            onDeleteMutasi={handleDeleteMutasi}
            riwayatPensiunList={riwayatPensiunList}
            onAddPensiun={handleAddPensiun}
            onEditPensiun={handleEditPensiun}
            onDeletePensiun={handleDeletePensiun}
            theme={theme}
          />
        );
      case "asuransi":
        return (
          <GenericTable
            title="Asuransi Pegawai"
            columns={asuransiCols}
            data={asuransiData}
          />
        );
      case "surat_masuk":
        return (
          <GenericTable
            title="Surat Masuk"
            columns={suratMasukCols}
            data={suratMasukData}
          />
        );
      case "disposisi":
        return (
          <GenericTable
            title="Disposisi Surat"
            columns={disposisiCols}
            data={disposisiData}
          />
        );
      case "agenda":
        return (
          <AgendaPimpinanView
            agendaList={agendaList}
            onAdd={handleAddAgenda}
            onEdit={handleEditAgenda}
            onDelete={handleDeleteAgenda}
            onSoftDelete={handleSoftDeleteAgenda}
            onRestore={handleRestoreAgenda}
            theme={theme}
          />
        );
      case "kontak":
        return (
          <KontakRelasiView
            kontakList={kontakList}
            onAdd={handleAddKontak}
            onEdit={handleEditKontak}
            onDelete={handleDeleteKontak}
            onSoftDelete={handleSoftDeleteKontak}
            onRestore={handleRestoreKontak}
            theme={theme}
          />
        );
      case "arsip":
        return (
          <ArsipDigitalView
            arsipList={arsipList}
            onAdd={handleAddArsip}
            onEdit={handleEditArsip}
            onDelete={handleDeleteArsip}
            onSoftDelete={handleSoftDeleteArsip}
            onRestore={handleRestoreArsip}
            theme={theme}
          />
        );
      case "laporan":
        return (
          <GenericTable
            title="Laporan Sistem"
            columns={laporanCols}
            data={laporanData}
          />
        );
      case "pengaturan":
        return <PengaturanView />;
      default:
        return <DashboardView onNavigate={(tab) => setActiveTab(tab)} theme={theme} />;
    }
  };

  if (isChecking) return null;

  if (!isAuthenticated) {
    const PROFIL_ITEMS = [
      { id: "visi_misi", label: "Visi & Misi Instansi", subtitle: "Arah dan strategi utama" },
      { id: "struktur", label: "Struktur Organisasi", subtitle: "Bagan pimpinan dan staf" },
      { id: "tupoksi", label: "Tugas Pokok & Fungsi", subtitle: "Tupoksi unit kerja" }
    ];

    const BERITA_ITEMS = [
      { id: "digitalisasi", label: "Digitalisasi Arsip Surat Nasional", subtitle: "Program terpadu kearsipan" },
      { id: "pelatihan", label: "Pelatihan Kompetensi Pegawai", subtitle: "Peningkatan mutu SDM" },
      { id: "evaluasi", label: "Rapat Evaluasi Kinerja Semester I", subtitle: "Laporan capaian & target" }
    ];

    const PELAYANAN_ITEMS = [
      { id: "layanan_surat", label: "Layanan Persuratan Masuk/Keluar", subtitle: "Penerimaan & disposisi naskah" },
      { id: "layanan_pegawai", label: "Manajemen Kenaikan Pangkat", subtitle: "Layanan karier & berkas" },
      { id: "layanan_arsip", label: "Akses Arsip Digital SK", subtitle: "Repositori resmi dinas" }
    ];

    const INFORMASI_ITEMS = [
      { id: "sop", label: "SOP Pelayanan Administrasi", subtitle: "Alur standardisasi kerja" },
      { id: "formulir", label: "Unduh Formulir Pengajuan Cuti", subtitle: "Formulir kepegawaian baku", actionType: "download" },
      { id: "panduan", label: "Panduan Penggunaan SIM-TATA USAHA", subtitle: "Buku panduan operasional", actionType: "download" }
    ];

    const getSubItemDetails = (id: string) => {
      switch (id) {
        case "visi_misi":
          return {
            title: "Visi & Misi Instansi",
            subtitle: "Arah dan Strategi Utama Unit Tata Usaha",
            icon: Shield,
            content: "Menjadi pusat pelayanan administrasi tata usaha yang modern, transparan, cepat, andal, dan ramah lingkungan melalui optimalisasi digitalisasi tata kelola persuratan dan kearsipan nasional.",
            details: [
              "Digitalisasi 100% berkas surat masuk, keluar, dan arsip digital secara berkala dan aman.",
              "Menyediakan sistem disposisi digital instan guna mempercepat koordinasi dengan pimpinan.",
              "Membina karier dan kompetensi profesional seluruh staf tata usaha secara merdeka dan berkelanjutan.",
              "Menjamin kerahasiaan dan integritas data rahasia instansi."
            ]
          };
        case "struktur":
          return {
            title: "Struktur Organisasi",
            subtitle: "Bagan Pejabat & Staf Tata Usaha",
            icon: Users,
            content: "Kepengurusan unit kerja Tata Usaha terstruktur rapi untuk memastikan setiap fungsi administrasi dan pelayanan internal dapat berjalan dengan presisi dan akuntabel.",
            details: [
              "Kepala Sub Bagian Tata Usaha — Drs. H. Ahmad Fauzi, M.Si",
              "Koordinator Kepegawaian & Diklat — Sri Wahyuni, S.Sos",
              "Koordinator Persuratan & Kearsipan — Dian Lestari, A.Md",
              "Koordinator Keuangan & Perencanaan — Rahmawati, S.E.",
              "Staf Perlengkapan & Umum — Budi Santoso, S.T."
            ]
          };
        case "tupoksi":
          return {
            title: "Tugas Pokok & Fungsi (Tupoksi)",
            subtitle: "Pedoman Kerja Operasional",
            icon: Briefcase,
            content: "Berdasarkan regulasi resmi, subbagian Tata Usaha bertugas mengoordinasikan perumusan rencana kegiatan, administrasi umum, perlengkapan, persuratan, pengumpulan dokumen, serta evaluasi pelaporan di lingkungan kerja instansi.",
            details: [
              "Pelayanan surat menyurat: penomoran, pencatatan, dan pendistribusian surat masuk/keluar.",
              "Pelayanan kepegawaian: berkas pangkat, gaji berkala, mutasi, cuti, dan kesejahteraan pegawai.",
              "Pengelolaan kearsipan: penataan arsip dinamis, vital, dan inaktif secara tertib.",
              "Penyusunan anggaran belanja, laporan keuangan, dan pertanggungjawaban operasional."
            ]
          };
        case "digitalisasi":
          return {
            title: "Digitalisasi Arsip Surat Nasional",
            subtitle: "Berita Utama — 25 Juni 2026",
            icon: Archive,
            content: "Dalam rangka menyambut era digitalisasi terpadu, unit Tata Usaha telah mencanangkan program digitalisasi total arsip bersejarah sejak tahun 2010. Proses scan dan entry dokumen vital ditargetkan rampung akhir tahun ini guna menghindari hilangnya dokumen fisik.",
            details: [
              "Mencegah kertas lapuk dan robek karena faktor cuaca.",
              "Mempermudah pencarian arsip lama hanya dalam hitungan detik.",
              "Penyimpanan terpusat pada server cloud berkeamanan tinggi."
            ]
          };
        case "pelatihan":
          return {
            title: "Pelatihan Kompetensi Kepegawaian",
            subtitle: "Warta Humas — 20 Juni 2026",
            icon: GraduationCap,
            content: "Guna membekali para staf dengan teknologi administrasi teranyar, unit Tata Usaha menyelenggarakan bimbingan teknis (Bimtek) intensif mengenai pengelolaan database kepegawaian digital dan pemrosesan disposisi naskah dinas elektronik.",
            details: [
              "Diikuti oleh seluruh staf administrasi tata usaha.",
              "Fokus pada efisiensi kerja dan proteksi data pribadi pegawai.",
              "Narasumber berpengalaman di bidang e-government."
            ]
          };
        case "evaluasi":
          return {
            title: "Rapat Evaluasi Kinerja Semester I",
            subtitle: "Agenda Internal — 18 Juni 2026",
            icon: FileCheck,
            content: "Rapat rutin pleno tengah tahun melaporkan pencapaian membanggakan, di mana waktu pemrosesan dokumen resmi mengalami penurunan rata-rata dari 2 hari menjadi hanya 10 menit berkat implementasi sistem disposisi digital real-time.",
            details: [
              "Kecepatan pelayanan meningkat drastis hingga 85%.",
              "Tingkat kepuasan layanan internal mencapai indeks 4.8 / 5.0.",
              "Target semester berikutnya: otomatisasi pengunduhan berkas mandiri bagi pegawai."
            ]
          };
        case "layanan_surat":
          return {
            title: "Layanan Persuratan Masuk/Keluar",
            subtitle: "Pelayanan Publik Terintegrasi",
            icon: Mail,
            content: "Mempermudah warga, mitra, dan instansi lain mengirimkan surat resmi. Sistem akan menerbitkan nomor urut surat, meregistrasi identitas pengirim, dan mengirimkan disposisi langsung ke meja pimpinan dalam sekejap.",
            details: [
              "Pencatatan digital otomatis.",
              "Penerbitan nomor surat keluar secara realtime.",
              "Notifikasi disposisi langsung ke pimpinan terkait."
            ]
          };
        case "layanan_pegawai":
          return {
            title: "Manajemen Kenaikan Pangkat & Karier",
            subtitle: "Pelayanan Administrasi Pegawai",
            icon: UserPlus,
            content: "Layanan mandiri bagi pegawai untuk memeriksa kelayakan kenaikan pangkat golongan, pengajuan cuti tahunan, pengumpulan berkas kenaikan gaji berkala (KGB), sertifikat diklat, dan surat keputusan jabatan.",
            details: [
              "Proses monitoring masa kerja yang transparan.",
              "Pengajuan cuti online yang langsung terintegrasi ke kalender agenda.",
              "Notifikasi dini sebelum masa kenaikan pangkat tiba."
            ]
          };
        case "layanan_arsip":
          return {
            title: "Akses Arsip Digital SK",
            subtitle: "Pusat Dokumen Resmi Instansi",
            icon: FileText,
            content: "Sebagai salah satu pilar administrasi, seluruh Surat Keputusan (SK) pimpinan diarsipkan secara digital dengan format PDF terenkripsi dan dapat dicari berdasarkan kata kunci, tanggal, nomor surat, maupun kategori urusan.",
            details: [
              "Akses eksklusif bagi pejabat berwenang.",
              "Proteksi pencurian data naskah dinas resmi.",
              "Backup data berkala di server lokal dan cloud secara simultan."
            ]
          };
        case "sop":
          return {
            title: "SOP Pelayanan Administrasi",
            subtitle: "Informasi Publik & Tata Tertib",
            icon: CheckCircle2,
            content: "Standard Operational Procedure (SOP) mengatur secara ketat alur kerja agar terjamin konsistensi layanan. Mulai dari penanganan surat rahasia, penerbitan surat tugas pimpinan, hingga penanganan komplain pelayanan publik.",
            details: [
              "Surat masuk harus dicatat di sistem dalam waktu maksimal 10 menit sejak diterima fisik.",
              "Surat dinas keluar wajib ditandatangani secara resmi.",
              "Arsip inaktif wajib dipindahkan ke depo arsip setelah masa retensi."
            ]
          };
        case "formulir":
          return {
            title: "Unduh Formulir Pengajuan Cuti",
            subtitle: "Berkas Administrasi — Unduhan Berhasil",
            icon: FileText,
            content: "Formulir ini digunakan untuk pengajuan permohonan cuti tahunan, cuti melahirkan, cuti alasan penting, maupun cuti di luar tanggungan negara. Isi formulir secara lengkap, mintalah persetujuan atasan langsung, dan serahkan ke unit kepegawaian.",
            details: [
              "Format Berkas: PDF / MS Word (.docx)",
              "Ukuran Berkas: 245 KB",
              "Status: Berkas Siap Diunduh"
            ],
            actionType: "download"
          };
        case "panduan":
          return {
            title: "Panduan Penggunaan SIM-TATA USAHA",
            subtitle: "Dokumen Panduan — Unduhan Berhasil",
            icon: FileText,
            content: "Buku panduan teknis bagi admin, operator, dan pimpinan untuk memaksimalkan seluruh fitur aplikasi SIM-TATA USAHA. Berisi penjelasan rinci disertai gambar langkah-demi-langkah pendaftaran pegawai, mutasi, pencatatan surat, dan peninjauan laporan.",
            details: [
              "Format Berkas: PDF (E-Book)",
              "Ukuran Berkas: 3.4 MB",
              "Versi Panduan: v1.2 (Terbaru)"
            ],
            actionType: "download"
          };
        default:
          return null;
      }
    };

    const handleLandingFeedbackSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!feedbackForm.name || !feedbackForm.email || !feedbackForm.message) {
        alert("Mohon lengkapi semua isian formulir hubungi kami.");
        return;
      }
      setFeedbackSent(true);
      setTimeout(() => {
        setFeedbackSent(false);
        setFeedbackForm({ name: "", email: "", message: "" });
        alert("Pesan Anda berhasil terkirim ke unit Tata Usaha! Terima kasih.");
      }, 1000);
    };

    return (
      <div className={`min-h-screen ${activeColors.appBg} flex flex-col font-sans text-slate-800 transition-colors duration-500 relative overflow-x-hidden selection:bg-slate-200`}>
        {/* Decorative background lights */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className={`absolute -top-32 -left-32 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${activeColors.primary}`}></div>
          <div className={`absolute top-1/4 -right-32 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-15 ${activeColors.primary}`}></div>
          <div className={`absolute bottom-32 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${activeColors.primary}`}></div>
        </div>

        {/* TOP NAVBAR */}
        <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-40 border-b border-slate-200/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className={`w-9 h-9 sm:w-11 sm:h-11 ${activeColors.primary} rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-100`}>
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight leading-none">SIM-TATA USAHA</h1>
                <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5 sm:mt-1">Portal Pelayanan Publik</p>
              </div>
            </div>

            {/* Navigation Menus matching user image */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button 
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setLandingDropdown(null); }}
                className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider"
              >
                HOME
              </button>

              {/* PROFIL Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setLandingDropdown(landingDropdown === "profil" ? null : "profil")}
                  className={`px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer ${landingDropdown === "profil" ? "text-indigo-600 bg-slate-50 rounded-lg" : ""}`}
                >
                  PROFIL <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                <AnimatePresence>
                  {landingDropdown === "profil" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50"
                    >
                      {PROFIL_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItem(getSubItemDetails(item.id));
                            setLandingDropdown(null);
                          }}
                          className="w-full text-left p-2.5 hover:bg-slate-50 rounded-xl transition-colors flex flex-col cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-800">{item.label}</span>
                          <span className="text-[10px] text-slate-400 mt-0.5">{item.subtitle}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* BERITA Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setLandingDropdown(landingDropdown === "berita" ? null : "berita")}
                  className={`px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer ${landingDropdown === "berita" ? "text-indigo-600 bg-slate-50 rounded-lg" : ""}`}
                >
                  BERITA <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                <AnimatePresence>
                  {landingDropdown === "berita" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50"
                    >
                      {BERITA_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItem(getSubItemDetails(item.id));
                            setLandingDropdown(null);
                          }}
                          className="w-full text-left p-2.5 hover:bg-slate-50 rounded-xl transition-colors flex flex-col cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-800 truncate">{item.label}</span>
                          <span className="text-[10px] text-slate-400 mt-0.5">{item.subtitle}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* PELAYANAN Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setLandingDropdown(landingDropdown === "pelayanan" ? null : "pelayanan")}
                  className={`px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer ${landingDropdown === "pelayanan" ? "text-indigo-600 bg-slate-50 rounded-lg" : ""}`}
                >
                  PELAYANAN <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                <AnimatePresence>
                  {landingDropdown === "pelayanan" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50"
                    >
                      {PELAYANAN_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItem(getSubItemDetails(item.id));
                            setLandingDropdown(null);
                          }}
                          className="w-full text-left p-2.5 hover:bg-slate-50 rounded-xl transition-colors flex flex-col cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-800 truncate">{item.label}</span>
                          <span className="text-[10px] text-slate-400 mt-0.5">{item.subtitle}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* INFORMASI Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setLandingDropdown(landingDropdown === "informasi" ? null : "informasi")}
                  className={`px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer ${landingDropdown === "informasi" ? "text-indigo-600 bg-slate-50 rounded-lg" : ""}`}
                >
                  INFORMASI <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                <AnimatePresence>
                  {landingDropdown === "informasi" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50"
                    >
                      {INFORMASI_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItem(getSubItemDetails(item.id));
                            setLandingDropdown(null);
                          }}
                          className="w-full text-left p-2.5 hover:bg-slate-50 rounded-xl transition-colors flex flex-col cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-800 truncate">{item.label}</span>
                          <span className="text-[10px] text-slate-400 mt-0.5">{item.subtitle}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* INOVASI Button */}
              <button 
                onClick={() => {
                  const el = document.getElementById("inovasi-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setLandingDropdown(null);
                }}
                className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider"
              >
                INOVASI
              </button>

              {/* KONTAK Button */}
              <button 
                onClick={() => {
                  const el = document.getElementById("kontak-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setLandingDropdown(null);
                }}
                className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors uppercase tracking-wider"
              >
                KONTAK
              </button>
            </nav>

            {/* Right Header Side: Palette/Theme selector and Login CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Palette theme selector directly accessible */}
              <div className="relative">
                <button 
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${isThemeOpen ? 'bg-slate-100 text-slate-800' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`}
                  title="Pilih Tema Warna"
                >
                  <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <AnimatePresence>
                  {isThemeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-56 sm:w-64 bg-[#1a1f2e] rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden z-50 p-2"
                    >
                      <div className="px-3 py-2 text-[10px] font-extrabold text-white/50 uppercase tracking-wider mb-1">
                        TEMA WARNA UI
                      </div>
                      <div className="px-2 mb-2 relative">
                        <Search className="absolute left-4 top-[9px] w-3.5 h-3.5 text-white/40" />
                        <input 
                          type="text" 
                          placeholder="Cari tema..." 
                          value={themeSearch}
                          onChange={(e) => setThemeSearch(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-8 pr-3 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                        />
                      </div>
                      <div className="max-h-[260px] overflow-y-auto px-1 pb-1 scrollbar-none">
                        {[
                          { id: "slate", label: "Midnight Slate", dot: "bg-slate-500" },
                          { id: "indigo", label: "Royal Sapphire", dot: "bg-indigo-500" },
                          { id: "amber", label: "Warm Amber", dot: "bg-amber-500" },
                          { id: "emerald", label: "Aurora Borealis", dot: "bg-emerald-500" },
                          { id: "red", label: "Crimson Eclipse", dot: "bg-red-500" },
                          { id: "violet", label: "Deep Amethyst", dot: "bg-violet-500" },
                          { id: "sky", label: "Ocean Abyss", dot: "bg-sky-500" },
                          { id: "pink", label: "Velvet Rose", dot: "bg-pink-500" },
                        ].filter(t => t.label.toLowerCase().includes(themeSearch.toLowerCase())).map((t) => {
                          const isActive = theme === t.id;
                          return (
                            <button
                              key={t.id}
                              onClick={() => {
                                handleThemeChange(t.id);
                                setIsThemeOpen(false);
                              }}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}
                            >
                              <div className={`w-3.5 h-3.5 rounded-full ${t.dot} ${isActive ? 'ring-2 ring-offset-2 ring-offset-[#1a1f2e] ring-white/90' : ''}`}></div>
                              <span className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-white/60'}`}>{t.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Login Button */}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-white text-xs font-bold cursor-pointer transition-all shadow-md ${activeColors.primary} ${activeColors.hover}`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Masuk Admin</span>
              </button>

              {/* Mobile menu toggle */}
              <button 
                onClick={() => setIsLandingMobileMenuOpen(!isLandingMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-xl"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* MOBILE SIDE NAVIGATION DRAWER */}
        <AnimatePresence>
          {isLandingMobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLandingMobileMenuOpen(false)}
                className="fixed inset-0 bg-black z-40"
              />
              <motion.div 
                initial={{ translateX: "100%" }}
                animate={{ translateX: 0 }}
                exit={{ translateX: "100%" }}
                transition={{ type: "tween", duration: 0.2 }}
                className="fixed inset-y-0 right-0 w-72 bg-white z-50 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-extrabold text-slate-900 tracking-tight">MENU UTAMA</span>
                    <button onClick={() => setIsLandingMobileMenuOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Home */}
                    <button 
                      onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsLandingMobileMenuOpen(false); }}
                      className="w-full text-left font-bold text-sm text-slate-800 hover:text-indigo-600 block transition-colors border-b border-slate-100 pb-2"
                    >
                      HOME
                    </button>

                    {/* Profil sub items */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">PROFIL</p>
                      {PROFIL_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItem(getSubItemDetails(item.id));
                            setIsLandingMobileMenuOpen(false);
                          }}
                          className="w-full text-left pl-3 py-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 block"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Berita sub items */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">BERITA</p>
                      {BERITA_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItem(getSubItemDetails(item.id));
                            setIsLandingMobileMenuOpen(false);
                          }}
                          className="w-full text-left pl-3 py-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 block"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Pelayanan sub items */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">PELAYANAN</p>
                      {PELAYANAN_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItem(getSubItemDetails(item.id));
                            setIsLandingMobileMenuOpen(false);
                          }}
                          className="w-full text-left pl-3 py-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 block"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Informasi sub items */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">INFORMASI</p>
                      {INFORMASI_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItem(getSubItemDetails(item.id));
                            setIsLandingMobileMenuOpen(false);
                          }}
                          className="w-full text-left pl-3 py-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 block"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Inovasi */}
                    <button 
                      onClick={() => {
                        const el = document.getElementById("inovasi-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        setIsLandingMobileMenuOpen(false);
                      }}
                      className="w-full text-left font-bold text-sm text-slate-800 hover:text-indigo-600 block transition-colors border-t border-slate-100 pt-3"
                    >
                      INOVASI
                    </button>

                    {/* Kontak */}
                    <button 
                      onClick={() => {
                        const el = document.getElementById("kontak-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        setIsLandingMobileMenuOpen(false);
                      }}
                      className="w-full text-left font-bold text-sm text-slate-800 hover:text-indigo-600 block transition-colors border-b border-slate-100 pb-3"
                    >
                      KONTAK
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsLandingMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-xs ${activeColors.primary} ${activeColors.hover} cursor-pointer`}
                  >
                    <Lock className="w-4 h-4" />
                    <span>Masuk Administrasi</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* HERO HEADER SECTION */}
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${activeColors.bgLight} ${activeColors.text} border ${activeColors.borderLight} text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6 sm:mb-8 shadow-xs`}>
              <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
              SIM Tata Usaha v1.2 Terintegrasi
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight drop-shadow-sm mb-6">
              Sistem Informasi Pelayanan & <span className={`${activeColors.text}`}>Tata Usaha Terpadu</span>
            </h1>
            
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-medium">
              Selamat datang di portal pelayanan digital terpadu Tata Usaha. Nikmati kemudahan pengelolaan persuratan masuk/keluar, pencatatan arsip digital, administrasi kepegawaian, dan agenda dinas secara transparan, akuntabel, dan real-time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button 
                onClick={() => {
                  const el = document.getElementById("layanan-utama");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl text-sm font-extrabold transition-all border border-slate-200 shadow-sm cursor-pointer hover:shadow-md`}
              >
                Pelajari Layanan Kami
              </button>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className={`w-full sm:w-auto px-6 py-3.5 text-white rounded-2xl text-sm font-extrabold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 ${activeColors.primary} ${activeColors.hover}`}
              >
                <Lock className="w-4 h-4" />
                Akses Dashboard Admin
              </button>
            </div>
          </motion.div>
        </section>

        {/* SEARCH PUBLIC DIRECTORY */}
        <section className="relative px-4 max-w-4xl mx-auto w-full z-10 -mt-10 mb-16 sm:mb-24">
          <div className="bg-white/70 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-white/80 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.05)]">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-3">Cari Layanan, SOP atau Berita:</h3>
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Ketik kata kunci (misal: visi, cuti, surat, kgb, pelatihan)..."
                value={landingSearch}
                onChange={(e) => setLandingSearch(e.target.value)}
                className="w-full bg-white/80 border border-slate-200 rounded-2xl py-3 sm:py-4 pl-12 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all shadow-inner"
              />
            </div>
            {landingSearch && (
              <div className="mt-3 bg-white/90 border border-slate-100 rounded-xl p-2 max-h-48 overflow-y-auto space-y-1">
                {[
                  ...PROFIL_ITEMS,
                  ...BERITA_ITEMS,
                  ...PELAYANAN_ITEMS,
                  ...INFORMASI_ITEMS
                ].filter(item => item.label.toLowerCase().includes(landingSearch.toLowerCase()) || item.subtitle.toLowerCase().includes(landingSearch.toLowerCase()))
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedSubItem(getSubItemDetails(item.id));
                      setLandingSearch("");
                    }}
                    className="w-full text-left p-2 hover:bg-slate-50 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{item.subtitle}</span>
                  </button>
                ))}
                {[
                  ...PROFIL_ITEMS,
                  ...BERITA_ITEMS,
                  ...PELAYANAN_ITEMS,
                  ...INFORMASI_ITEMS
                ].filter(item => item.label.toLowerCase().includes(landingSearch.toLowerCase()) || item.subtitle.toLowerCase().includes(landingSearch.toLowerCase())).length === 0 && (
                  <p className="text-center text-xs text-slate-400 py-2">Tidak ada data publik ditemukan dengan kata kunci tersebut.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* COUNTER & INTERACTIVE STATISTICS BANNER */}
        <section className="bg-white/40 backdrop-blur-sm border-y border-white/40 py-12 sm:py-16 mb-20 sm:mb-28 z-10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <p className={`text-3xl sm:text-5xl font-black ${activeColors.text} tracking-tight`}>{suratMasukData.length + 342}</p>
              <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-2">SURAT TERPROSES</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wider">Tahun Berjalan 2026</p>
            </div>
            <div className="text-center border-l border-slate-200/50">
              <p className={`text-3xl sm:text-5xl font-black ${activeColors.text} tracking-tight`}>{pegawaiList.length}</p>
              <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-2">PEGAWAI TERDATA</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wider">Aparatur Sipil Aktif</p>
            </div>
            <div className="text-center border-l border-slate-200/50">
              <p className={`text-3xl sm:text-5xl font-black ${activeColors.text} tracking-tight`}>{agendaList.length + 18}</p>
              <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-2">AGENDA DINAS</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wider">Pertemuan Pimpinan</p>
            </div>
            <div className="text-center border-l border-slate-200/50">
              <p className={`text-3xl sm:text-5xl font-black ${activeColors.text} tracking-tight`}>{arsipList.length + 1250}</p>
              <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-2">ARSIP DIGITAL</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wider">Naskah Dinas Aman</p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE SDM INFOGRAPHIC SECTION */}
        <section className="max-w-4xl mx-auto px-4 mb-20 sm:mb-28 z-10 relative">
          <div className="bg-[#fcfdfd] border border-slate-200/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] rounded-[2.5rem] p-6 sm:p-12 overflow-hidden relative">
            
            {/* Top decorative badge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Infographic Header */}
            <div className="flex flex-col items-center text-center mb-10 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-6 mb-4">
                {/* Central Java Coat of Arms (Simplified elegant vector SVG) */}
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-xs border border-slate-100 p-1">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Shield shape */}
                    <path d="M 50 10 C 20 10, 15 40, 15 60 C 15 85, 50 95, 50 95 C 50 95, 85 85, 85 60 C 85 40, 80 10, 50 10 Z" fill="#f8f9fa" stroke="#1b2a47" strokeWidth="3" />
                    {/* Inner gold line */}
                    <path d="M 50 15 C 26 15, 21 42, 21 60 C 21 81, 50 89, 50 89 C 50 89, 79 81, 79 60 C 79 42, 74 15, 50 15 Z" fill="none" stroke="#f3af22" strokeWidth="2" />
                    {/* Red & White background inside shield */}
                    <path d="M 50 15 C 26 15, 21 42, 21 60 C 21 68, 26 75, 33 80 L 33 15 Z" fill="#e63946" opacity="0.15" />
                    {/* Gold temple silhouette in center */}
                    <path d="M 40 75 L 43 55 L 47 55 L 45 42 L 55 42 L 53 55 L 57 55 L 60 75 Z" fill="#f3af22" stroke="#d49000" strokeWidth="1" />
                    <rect x="35" y="75" width="30" height="5" rx="1.5" fill="#1b2a47" />
                    {/* Rice and cotton ears (green/yellow details) */}
                    <path d="M 28 65 C 28 50, 38 40, 42 45" fill="none" stroke="#2a9d8f" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 72 65 C 72 50, 62 40, 58 45" fill="none" stroke="#2a9d8f" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Star at top */}
                    <polygon points="50,18 53,24 60,24 55,28 57,34 50,30 43,34 45,28 40,24 47,24" fill="#e63946" />
                  </svg>
                </div>

                {/* Bakti Husada / Health Logo (Simplified elegant vector SVG) */}
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-xs border border-slate-100 p-1">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Blue cross back */}
                    <path d="M 35 15 L 65 15 L 65 35 L 85 35 L 85 65 L 65 65 L 65 85 L 35 85 L 35 65 L 15 65 L 15 35 L 35 35 Z" fill="#1b2a47" />
                    {/* White circle in center */}
                    <circle cx="50" cy="50" r="24" fill="#ffffff" />
                    {/* Green central shape (Bakti husada motif) */}
                    <path d="M 50 32 C 40 32, 34 42, 38 52 C 42 62, 50 68, 50 68 C 50 68, 58 62, 62 52 C 66 42, 60 32, 50 32 Z" fill="#2a9d8f" />
                    {/* Red internal crescent */}
                    <path d="M 50 36 C 44 36, 40 43, 43 50 C 46 57, 50 62, 50 62" fill="none" stroke="#e63946" strokeWidth="3.5" strokeLinecap="round" />
                    {/* Small inner white core */}
                    <circle cx="50" cy="50" r="6" fill="#ffffff" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111e38] tracking-tight font-sans leading-tight">
                SUMBER DAYA MANUSIA
              </h3>
              <h4 className="text-xl sm:text-2xl font-black text-[#1b2a47] tracking-tight leading-none mt-1">
                RSUD DR. MOEWARDI
              </h4>
              
              <div className="bg-[#0f172a] text-white px-5 py-1.5 rounded-full text-xs font-bold mt-4 tracking-wider uppercase shadow-sm">
                per Juni 2026
              </div>
            </div>

            {/* Infographic Dashboard Content */}
            <div className="space-y-12">
              
              {/* LAYER 1: JUMLAH PEGAWAI & JENIS KELAMIN */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                
                {/* 1A: JUMLAH PEGAWAI */}
                <div className="md:col-span-6 bg-slate-50/50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1b2a47]"></div>
                  <h5 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-3">JUMLAH PEGAWAI</h5>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl sm:text-6xl font-black text-[#111e38] tracking-tight">2.403</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-500 tracking-widest uppercase mt-2">Orang</span>
                </div>

                {/* 1B: JENIS KELAMIN */}
                <div className="md:col-span-6 bg-slate-50/50 rounded-3xl p-6 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1b2a47]"></div>
                  <h5 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-4 text-center md:text-left">JENIS KELAMIN</h5>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Laki-laki */}
                    <div className="flex flex-col items-center text-center">
                      {/* Stylized Avatar Laki-Laki */}
                      <div className="w-16 h-16 rounded-full bg-amber-100 border border-amber-200/60 overflow-hidden flex items-center justify-center mb-2 shadow-xs">
                        <svg viewBox="0 0 100 100" className="w-12 h-12 mt-1">
                          {/* Face */}
                          <circle cx="50" cy="40" r="22" fill="#fbc4ab" />
                          {/* Hair (Short modern) */}
                          <path d="M 28 35 C 28 15, 72 15, 72 35 C 65 24, 35 24, 28 35" fill="#4a3b32" />
                          {/* Shoulders / Shirt */}
                          <path d="M 20 85 C 20 65, 80 65, 80 85 Z" fill="#d3a27f" />
                          <path d="M 50 65 L 44 78 L 56 78 Z" fill="#fbc4ab" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Laki-Laki</span>
                      <span className="text-lg font-black text-[#111e38] mt-0.5">931 Orang</span>
                    </div>

                    {/* Perempuan */}
                    <div className="flex flex-col items-center text-center">
                      {/* Stylized Avatar Perempuan */}
                      <div className="w-16 h-16 rounded-full bg-pink-50 border border-pink-100 overflow-hidden flex items-center justify-center mb-2 shadow-xs">
                        <svg viewBox="0 0 100 100" className="w-12 h-12 mt-1">
                          {/* Hair back */}
                          <circle cx="50" cy="46" r="26" fill="#2d221e" />
                          {/* Face */}
                          <circle cx="50" cy="42" r="21" fill="#fbc4ab" />
                          {/* Hair front */}
                          <path d="M 28 36 C 28 18, 72 18, 72 36 C 72 30, 28 30, 28 36" fill="#2d221e" />
                          <path d="M 29 34 C 29 45, 34 45, 34 38" fill="#2d221e" />
                          <path d="M 71 34 C 71 45, 66 45, 66 38" fill="#2d221e" />
                          {/* Shoulders / Shirt */}
                          <path d="M 22 85 C 22 68, 78 68, 78 85 Z" fill="#c39474" />
                          <path d="M 50 68 L 45 78 L 55 78 Z" fill="#fbc4ab" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Perempuan</span>
                      <span className="text-lg font-black text-[#111e38] mt-0.5">1.472 Orang</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* LAYER 2: JENIS TENAGA & PENDIDIKAN */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                
                {/* 2A: JENIS TENAGA */}
                <div className="md:col-span-6 bg-slate-50/30 rounded-3xl p-6 border border-slate-100/80">
                  <h5 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-6 text-center md:text-left">JENIS TENAGA</h5>
                  
                  <div className="space-y-4 font-sans">
                    {[
                      { name: "Struktural", val: 34, pct: 3, color: "bg-[#f37021]" },
                      { name: "Medis", val: 263, pct: 11, color: "bg-[#f37021]" },
                      { name: "Perawat/Bidan", val: 1180, pct: 49, color: "bg-[#f37021]" },
                      { name: "Penunjang", val: 442, pct: 18, color: "bg-[#f37021]" },
                      { name: "Administrasi", val: 484, pct: 20, color: "bg-[#f37021]" },
                    ].map((tenaga, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-[#1b2a47]">
                          <span>{tenaga.name}</span>
                          <span>{tenaga.val}</span>
                        </div>
                        <div className="w-full h-3 bg-slate-200/60 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tenaga.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className={`h-full ${tenaga.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2B: PENDIDIKAN */}
                <div className="md:col-span-6 bg-slate-50/30 rounded-3xl p-6 border border-slate-100/80 flex flex-col justify-between">
                  <h5 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-4 text-center md:text-left">PENDIDIKAN</h5>
                  
                  {/* Vertical Bar Chart */}
                  <div className="flex items-end justify-between h-48 pt-6 border-b border-slate-300 px-2">
                    {[
                      { label: "SD", val: 0, pct: 1 },
                      { label: "SMP", val: 2, pct: 2 },
                      { label: "SMA", val: 296, pct: 31 },
                      { label: "DIII", val: 936, pct: 100 },
                      { label: "DIV", val: 180, pct: 19 },
                      { label: "S1", val: 684, pct: 73 },
                      { label: "S2", val: 269, pct: 28 },
                      { label: "S3", val: 34, pct: 4 },
                    ].map((edu, idx) => {
                      return (
                        <div key={idx} className="flex flex-col items-center flex-1 group">
                          {/* Value on top */}
                          <span className="text-[9px] sm:text-[10px] font-black text-[#1b2a47] mb-1.5 transition-transform group-hover:-translate-y-0.5">
                            {edu.val}
                          </span>
                          {/* Vertical Bar */}
                          <div className="w-6 sm:w-8 bg-slate-100 rounded-t-sm overflow-hidden flex items-end h-32 relative">
                            <motion.div 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${edu.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: idx * 0.05, ease: "easeOut" }}
                              className="w-full bg-[#a20025] rounded-t-sm"
                            />
                          </div>
                          {/* Label below line */}
                          <span className="text-[10px] sm:text-xs font-black text-slate-500 mt-2">
                            {edu.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* LAYER 3: JUMLAH DOKTER, GOLONGAN, STATUS KEPEGAWAIAN */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* 3A: JUMLAH DOKTER */}
                <div className="md:col-span-4 space-y-4">
                  <h5 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest text-center md:text-left">JUMLAH DOKTER</h5>
                  
                  <div className="space-y-2.5">
                    {[
                      { name: "KONSULTAN", val: 141 },
                      { name: "SPESIALIS", val: 103 },
                      { name: "DOKTER UMUM", val: 19 },
                      { name: "DR GIGI UMUM", val: 1 },
                      { name: "DR GIGI SPESIALIS", val: 8 },
                    ].map((doc, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="bg-[#f37021] text-white pl-4 pr-1.5 py-1.5 rounded-full flex items-center justify-between shadow-xs"
                      >
                        <span className="text-[10px] font-black tracking-wider">{doc.name}</span>
                        <span className="w-8 h-8 rounded-full bg-white text-[#f37021] flex items-center justify-center text-xs font-black shrink-0">
                          {doc.val}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 3B: GOLONGAN */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <h5 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest text-center mb-6">GOLONGAN</h5>
                  
                  {/* SVG Donut Chart */}
                  <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Segment 1: GOL II (231 -> 19%) - Slate */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#1d2d44"
                        strokeWidth="10"
                        strokeDasharray="238.76"
                        strokeDashoffset="0"
                      />
                      {/* Segment 2: GOL III (695 -> 57%) - Cyan */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#00b4d8"
                        strokeWidth="10"
                        strokeDasharray="238.76"
                        strokeDashoffset="45.36"
                      />
                      {/* Segment 3: GOL IV (287 -> 24%) - Red */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#a20025"
                        strokeWidth="10"
                        strokeDasharray="238.76"
                        strokeDashoffset="181.45"
                      />
                    </svg>
                    
                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-base font-extrabold text-[#111e38]">1.213</span>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">PNS</span>
                    </div>
                  </div>

                  {/* Donut Legend */}
                  <div className="text-left space-y-1.5 font-mono text-[10px] font-black tracking-wide">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#a20025] inline-block shrink-0 rounded-xs"></span>
                      <span className="text-slate-600">GOL IV : <span className="text-[#a20025]">287 ORANG</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#00b4d8] inline-block shrink-0 rounded-xs"></span>
                      <span className="text-slate-600">GOL III : <span className="text-[#00b4d8]">695 ORANG</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#1d2d44] inline-block shrink-0 rounded-xs"></span>
                      <span className="text-slate-600">GOL II : <span className="text-[#1d2d44]">231 ORANG</span></span>
                    </div>
                  </div>
                </div>

                {/* 3C: STATUS KEPEGAWAIAN */}
                <div className="md:col-span-4 space-y-4">
                  <h5 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest text-center md:text-left">STATUS KEPEGAWAIAN</h5>
                  
                  <div className="space-y-2.5">
                    {[
                      { name: "PNS", val: "1.213" },
                      { name: "CPNS", val: "0" },
                      { name: "PPPK", val: "184" },
                      { name: "BLUD", val: "920" },
                      { name: "MITRA", val: "52" },
                    ].map((stat, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="bg-[#20b2aa] text-white pl-1.5 pr-4 py-1.5 rounded-full flex items-center justify-between shadow-xs"
                      >
                        <span className="w-10 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-black shrink-0 border border-white/20">
                          {stat.val}
                        </span>
                        <span className="text-xs font-black tracking-widest pr-4">{stat.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* LAYANAN UTAMA SECTION (PELAYANAN) */}
        <section id="layanan-utama" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28 z-10 relative scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">LAYANAN UNGGULAN</h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">Layanan Administrasi Digital Utama</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-3 leading-relaxed">Unit Kerja Tata Usaha memproses segala bentuk dokumen, kenaikan berkas, dan perizinan internal secara transparan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Layanan 1 */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-2xl ${activeColors.bgLight} ${activeColors.text} flex items-center justify-center mb-6 border ${activeColors.borderLight}`}>
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Pencatatan Surat Menyurat</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Pengarsipan, penomoran otomatis beralur, dan pelacakan surat masuk serta disposisi kepala instansi secara realtime.</p>
              </div>
              <button 
                onClick={() => setSelectedSubItem(getSubItemDetails("layanan_surat"))}
                className={`mt-6 text-xs font-bold ${activeColors.text} hover:underline flex items-center gap-1 cursor-pointer`}
              >
                Pelajari Selengkapnya <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Layanan 2 */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-2xl ${activeColors.bgLight} ${activeColors.text} flex items-center justify-center mb-6 border ${activeColors.borderLight}`}>
                  <UserPlus className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Karier & Mutasi Kepegawaian</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Pengumpulan berkas digital Kenaikan Gaji Berkala (KGB), riwayat diklat, permohonan mutasi, dan pengelolaan cuti tahunan pegawai.</p>
              </div>
              <button 
                onClick={() => setSelectedSubItem(getSubItemDetails("layanan_pegawai"))}
                className={`mt-6 text-xs font-bold ${activeColors.text} hover:underline flex items-center gap-1 cursor-pointer`}
              >
                Pelajari Selengkapnya <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Layanan 3 */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-2xl ${activeColors.bgLight} ${activeColors.text} flex items-center justify-center mb-6 border ${activeColors.borderLight}`}>
                  <Archive className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Gudang Arsip Digital SK</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Repositori penyimpanan dokumen berizin terenkripsi untuk Surat Keputusan (SK) pejabat dan naskah dinas kenegaraan penting.</p>
              </div>
              <button 
                onClick={() => setSelectedSubItem(getSubItemDetails("layanan_arsip"))}
                className={`mt-6 text-xs font-bold ${activeColors.text} hover:underline flex items-center gap-1 cursor-pointer`}
              >
                Pelajari Selengkapnya <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </section>

        {/* NEWS SECTION (BERITA) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28 z-10 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">BERITA TERKINI</h2>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">Warta & Pengumuman Instansi</h3>
            </div>
            <button 
              onClick={() => setSelectedSubItem(getSubItemDetails("digitalisasi"))}
              className={`mt-4 sm:mt-0 text-xs font-bold ${activeColors.text} hover:underline cursor-pointer`}
            >
              Kunjungi Ruang Berita →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div 
              onClick={() => setSelectedSubItem(getSubItemDetails("digitalisasi"))}
              className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${activeColors.bgLight} ${activeColors.text} border ${activeColors.borderLight} uppercase`}>Kearsipan</span>
                  <span className="text-[10px] text-slate-400 font-bold">25 Juni 2026</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 hover:text-indigo-600 transition-colors mb-2 leading-snug">Digitalisasi Arsip Surat Nasional 2026 Dimulai</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">Unit Tata Usaha meresmikan konversi dokumen lama 2010 s.d 2025 ke server digital terenkripsi.</p>
              </div>
              <span className={`text-xs font-bold ${activeColors.text} flex items-center gap-1`}>Baca Berita →</span>
            </div>

            <div 
              onClick={() => setSelectedSubItem(getSubItemDetails("pelatihan"))}
              className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 uppercase">SDM Unggul</span>
                  <span className="text-[10px] text-slate-400 font-bold">20 Juni 2026</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 hover:text-indigo-600 transition-colors mb-2 leading-snug">Pelatihan Aplikasi Tata Usaha Modern bagi Staf</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">Bimtek pengelolaan database dinas terpadu guna mewujudkan pelayanan berstandar nasional.</p>
              </div>
              <span className={`text-xs font-bold ${activeColors.text} flex items-center gap-1`}>Baca Berita →</span>
            </div>

            <div 
              onClick={() => setSelectedSubItem(getSubItemDetails("evaluasi"))}
              className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase">Evaluasi</span>
                  <span className="text-[10px] text-slate-400 font-bold">18 Juni 2026</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 hover:text-indigo-600 transition-colors mb-2 leading-snug">Rapat Pleno Semester I: Waktu Proses Turun 85%</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">Penerapan sistem disposisi digital mempercepat kelancaran koordinasi dinas secara masif.</p>
              </div>
              <span className={`text-xs font-bold ${activeColors.text} flex items-center gap-1`}>Baca Berita →</span>
            </div>
          </div>
        </section>

        {/* INOVASI TECH BAR (INOVASI) */}
        <section id="inovasi-section" className="bg-slate-950 text-white py-16 sm:py-24 mb-20 sm:mb-28 z-10 relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className={`absolute -top-32 left-1/3 w-96 h-96 rounded-full filter blur-[120px] opacity-20 bg-indigo-500`}></div>
            <div className={`absolute -bottom-32 left-10 w-96 h-96 rounded-full filter blur-[120px] opacity-15 bg-emerald-500`}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
              <div className="lg:col-span-5">
                <span className={`inline-block text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 mb-4`}>INOVASI & TEKNOLOGI</span>
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-6">Penerapan Sistem Digital 0% Hambatan Kertas</h3>
                <p className="text-slate-400 font-medium text-xs sm:text-sm leading-relaxed mb-8">
                  SIM-TATA USAHA menghadirkan modernisasi administrasi dengan menerapkan kearsipan paperless, integrasi master data kepegawaian yang dinamis, otomatisasi slip pangkat, serta pelaporan statistik performa tata usaha yang real-time dan terjamin keamanannya.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">Paperless Kearsipan Digital</p>
                      <p className="text-[11px] text-slate-400">Penyimpanan naskah dinas dalam format PDF yang aman dari kerusakan fisik.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">Analisis AI Pintar Terpadu</p>
                      <p className="text-[11px] text-slate-400">Pengolahan bagan otomatis, peramalan beban surat masuk, dan statistik keaktifan pimpinan.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Inovasi 01</span>
                  <h4 className="text-lg font-extrabold text-white mt-2 mb-3">Keamanan Enkripsi Dokumen</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Setiap file SK dan lampiran yang diunggah ke sistem diproteksi menggunakan enkripsi biner guna melindungi rahasia data instansi dari penyalahgunaan eksternal.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Inovasi 02</span>
                  <h4 className="text-lg font-extrabold text-white mt-2 mb-3">Integrasi Pimpinan</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Lembar disposisi pimpinan dapat diterbitkan secara digital dan langsung didistribusikan ke staf pelaksana terkait dalam hitungan detik melalui notifikasi instan.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Inovasi 03</span>
                  <h4 className="text-lg font-extrabold text-white mt-2 mb-3">Sistem Gaji Berkala</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Perhitungan masa kerja pangkat golongan serta otomatisasi estimasi waktu pengajuan kenaikan gaji berkala (KGB) yang akurat sesuai pedoman undang-undang kepegawaian.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Inovasi 04</span>
                  <h4 className="text-lg font-extrabold text-white mt-2 mb-3">Manajemen Kontak Cepat</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Buku telepon kontak dinas relasi yang terarsip rapi memudahkan sekretariat melakukan korespondensi cepat dengan berbagai kementerian maupun mitra kerja swasta.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HUBUNGI KAMI SECTION (KONTAK) */}
        <section id="kontak-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32 z-10 relative scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            {/* Info Kantor */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">KONTAK RESMI</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">Hubungi Kantor Tata Usaha</h3>
              <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed mb-8">
                Kami siap membantu Anda terkait urusan naskah dinas, legalisasi SK, permohonan informasi publik tata usaha, dan kendala login admin. Silakan kunjungi unit kami atau hubungi kontak resmi di bawah ini.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 ${activeColors.text}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Alamat Kantor Utama</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">Gedung Administrasi Terpadu Lt. 2, Jl. Merdeka Selatan No. 12, Jakarta Pusat, DKI Jakarta 10110</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 ${activeColors.text}`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Telepon & Fax</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">(021) 345-6789 / Fax: (021) 345-6790</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 ${activeColors.text}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Surel / Email Korespondensi</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">kontak@simtu.id / sekretariat@simtu.id</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Hubungi Kami */}
            <div className="lg:col-span-7">
              <div className="bg-white/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/50 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-6">Formulir Pengaduan & Layanan</h4>
                <form onSubmit={handleLandingFeedbackSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Nama Lengkap</label>
                      <input 
                        type="text" 
                        required
                        value={feedbackForm.name}
                        onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                        placeholder="Masukkan nama Anda"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Alamat Email</label>
                      <input 
                        type="email" 
                        required
                        value={feedbackForm.email}
                        onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                        placeholder="Contoh: nama@domain.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Isi Pesan / Pertanyaan</label>
                    <textarea 
                      rows={4}
                      required
                      value={feedbackForm.message}
                      onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                      placeholder="Tuliskan pesan, saran, atau keluhan Anda di sini secara lengkap..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={feedbackSent}
                    className={`w-full py-3 px-4 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${feedbackSent ? 'bg-slate-400' : `${activeColors.primary} ${activeColors.hover}`}`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{feedbackSent ? "Sedang Mengirim..." : "Kirim Pesan"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* PUBLIC PORTAL FOOTER */}
        <footer className="bg-slate-900 text-white border-t border-slate-800 py-10 sm:py-12 mt-auto relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sm font-extrabold text-white">SIM-TATA USAHA</p>
              <p className="text-[11px] text-slate-400 font-semibold mt-1">Sistem Tata Usaha Terpadu & Digitalisasi Kearsipan Nasional.</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-[10px] text-slate-500 font-bold">© 2026 Kantor Tata Usaha Utama. All Rights Reserved.</p>
              <p className="text-[9px] text-slate-600 font-bold mt-1">Dilindungi oleh Undang-Undang Kearsipan & Hak Cipta Administrasi Negara.</p>
            </div>
          </div>
        </footer>

        {/* FLOATING SUB-ITEM DETAILS MODAL */}
        <AnimatePresence>
          {selectedSubItem && (
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50 overflow-y-auto">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSubItem(null)}
                className="fixed inset-0 bg-black"
              />

              {/* Modal Body */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white/95 backdrop-blur-xl w-full max-w-lg border border-slate-200 rounded-3xl shadow-2xl relative overflow-hidden z-10"
              >
                {/* Header info */}
                <div className={`p-6 border-b border-slate-100 flex items-start gap-4 ${selectedSubItem.actionType === "download" ? "bg-indigo-50/50" : "bg-slate-50/50"}`}>
                  <div className={`w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 ${activeColors.text} shadow-sm`}>
                    <selectedSubItem.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-black text-slate-950 truncate">{selectedSubItem.title}</h4>
                    <p className="text-[11px] text-slate-400 font-extrabold tracking-wide uppercase mt-0.5">{selectedSubItem.subtitle}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedSubItem(null)}
                    className="p-1 text-slate-400 hover:text-slate-600 bg-white border border-slate-200/50 rounded-xl transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedSubItem.content}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Informasi Pendukung & Poin Kunci:</p>
                    <div className="space-y-1.5">
                      {selectedSubItem.details.map((detail: string, idx: number) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <span className={`w-1.5 h-1.5 rounded-full ${activeColors.primary} shrink-0 mt-1.5`}></span>
                          <span className="text-xs text-slate-700 font-bold">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <span className="text-[10px] text-slate-400 font-semibold">Portal Layanan Publik Resmi</span>
                  <div className="flex gap-2">
                    {selectedSubItem.actionType === "download" ? (
                      <button
                        onClick={() => {
                          alert(`Unduhan berhasil: ${selectedSubItem.title}. File Anda siap dibuka.`);
                          setSelectedSubItem(null);
                        }}
                        className={`px-4 py-2 rounded-xl text-white text-xs font-bold transition-all shadow-md cursor-pointer ${activeColors.primary} ${activeColors.hover}`}
                      >
                        Mulai Unduh File
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedSubItem(null)}
                        className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        Tutup Jendela
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* PIN LOGIN MODAL BACKDROP & BOX */}
        <AnimatePresence>
          {isLoginModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50 overflow-y-auto">
              {/* Backdrop blur overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setIsLoginModalOpen(false);
                  setError("");
                }}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
              />

              {/* Login Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/50 relative z-10"
              >
                {/* Close Button */}
                <button 
                  onClick={() => {
                    setIsLoginModalOpen(false);
                    setError("");
                  }}
                  className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 ${activeColors.primary} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-100`}>
                    <Lock className="w-7 h-7" />
                  </div>
                </div>

                <h2 className="text-2xl font-black text-center text-slate-900 tracking-tight mb-2">
                  OTENTIKASI ADMIN
                </h2>
                <p className="text-center text-slate-500 mb-8 text-xs font-semibold uppercase tracking-wider">
                  Sistem Administrasi Tata Usaha
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                      PIN Akses Admin
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Masukkan 6 digit PIN"
                        className={`w-full pl-11 pr-4 py-3 border ${error ? "border-red-300 focus:ring-red-500" : "border-slate-200 focus:ring-slate-400"} rounded-2xl text-lg tracking-widest font-extrabold focus:outline-none focus:ring-1 bg-white/50 focus:bg-white transition-colors`}
                        autoFocus
                      />
                    </div>
                    {error && (
                      <p className="text-red-500 text-xs font-semibold mt-2.5 flex items-center">
                        <X className="w-3.5 h-3.5 mr-1" />
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`w-full ${activeColors.primary} ${activeColors.hover} text-white font-extrabold py-3.5 rounded-2xl text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md shadow-indigo-100 cursor-pointer`}
                  >
                    Masuk Sistem Administrasi
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-200/50 text-center">
                  <p className="text-xs text-slate-500 font-medium">
                    Gunakan PIN{" "}
                    <span className="font-mono font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">
                      123456
                    </span>{" "}
                    untuk demo administrator
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${activeColors.appBg} flex font-sans text-slate-800 transition-colors duration-500 relative overflow-hidden`}>
      {/* Decorative app background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-64 -left-32 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 ${activeColors.primary}`}></div>
        <div className={`absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 ${activeColors.primary}`}></div>
        <div className={`absolute -bottom-64 left-1/4 w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-[100px] opacity-15 ${activeColors.primary}`}></div>
      </div>

      {/* Sidebar Desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/70 backdrop-blur-xl border-r border-white/50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transform transition-transform duration-300 lg:translate-x-0 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:block flex flex-col shrink-0 h-screen`}
      >
        <div className="p-6 border-b border-slate-200/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${activeColors.primary} rounded flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
              TU
            </div>
            <span className="font-bold text-slate-900 tracking-tight drop-shadow-sm">
              SIM-TATA USAHA
            </span>
          </div>
          <button
            className="lg:hidden text-slate-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto space-y-1 no-scrollbar">
          <p className="px-6 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">
            Menu Utama
          </p>
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-6 py-2.5 text-sm font-medium transition-all ${
                activeTab === item.id
                  ? `${activeColors.bgLight} ${activeColors.text} border-r-4 ${activeColors.border}`
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <item.icon
                className={`w-4 h-4 transition-colors ${activeTab === item.id ? activeColors.textLight : "text-slate-400"}`}
              />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200/50 bg-white/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-300 shrink-0 overflow-hidden shadow-inner">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Admin&backgroundColor=f1f5f9"
                alt="Admin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-xs font-bold text-slate-900 truncate drop-shadow-sm">
                Admin Utama
              </p>
              <p className="text-[10px] text-slate-500">Super Admin</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-slate-400 hover:text-rose-600 p-1.5 hover:bg-rose-50 rounded-lg transition-colors"
              title="Keluar"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0 relative z-10">
        {/* Top Header */}
        <header className="bg-white/70 backdrop-blur-xl h-16 border-b border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex items-center justify-between px-4 sm:px-8 shrink-0">
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 -ml-2 mr-2 text-slate-500 hover:bg-white/50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-bold text-slate-800 hidden sm:block drop-shadow-sm">
              {MENU_ITEMS.find((m) => m.id === activeTab)?.label}
            </h2>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors p-2">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>

            {/* Theme selector popup */}
            <div className="relative">
              <button 
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${isThemeOpen ? 'bg-slate-100 text-slate-800' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`}
                title="Pilih Tema UI"
              >
                <Palette className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {isThemeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-56 sm:w-64 bg-[#1a1f2e] rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden z-50 p-2"
                  >
                    <div className="px-3 py-2 text-[10px] font-extrabold text-white/50 uppercase tracking-wider mb-1">
                      TEMA WARNA UI
                    </div>
                    <div className="px-2 mb-2 relative">
                      <Search className="absolute left-4 top-[9px] w-3.5 h-3.5 text-white/40" />
                      <input 
                        type="text" 
                        placeholder="Cari tema..." 
                        value={themeSearch}
                        onChange={(e) => setThemeSearch(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-8 pr-3 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                      />
                    </div>
                    <div className="max-h-[260px] overflow-y-auto px-1 pb-1 scrollbar-none">
                      {[
                        { id: "slate", label: "Midnight Slate", dot: "bg-slate-500" },
                        { id: "indigo", label: "Royal Sapphire", dot: "bg-indigo-500" },
                        { id: "amber", label: "Warm Amber", dot: "bg-amber-500" },
                        { id: "emerald", label: "Aurora Borealis", dot: "bg-emerald-500" },
                        { id: "red", label: "Crimson Eclipse", dot: "bg-red-500" },
                        { id: "violet", label: "Deep Amethyst", dot: "bg-violet-500" },
                        { id: "sky", label: "Ocean Abyss", dot: "bg-sky-500" },
                        { id: "pink", label: "Velvet Rose", dot: "bg-pink-500" },
                      ].filter(t => t.label.toLowerCase().includes(themeSearch.toLowerCase())).map((t) => {
                        const isActive = theme === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              handleThemeChange(t.id);
                              setIsThemeOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}
                          >
                            <div className={`w-3.5 h-3.5 rounded-full ${t.dot} ${isActive ? 'ring-2 ring-offset-2 ring-offset-[#1a1f2e] ring-white/90' : ''}`}></div>
                            <span className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-white/60'}`}>{t.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Live date and time */}
            <div className="hidden lg:block shrink-0 pl-2">
              <LiveClock theme={theme} />
            </div>

            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block mx-2"></div>
            
            {/* Admin Account */}
            <div className="flex items-center gap-2.5 cursor-pointer hover:bg-slate-50 p-1.5 rounded-xl transition-colors">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-extrabold text-slate-800">Admin Utama</p>
                <p className="text-[10px] text-slate-500 font-medium">admin@simtu.id</p>
              </div>
              <div className={`w-8 h-8 rounded-full ${activeColors.primary} text-white flex items-center justify-center font-bold text-xs shadow-xs`}>
                AD
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-transparent p-4 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
