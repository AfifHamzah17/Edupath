import Master from "@/components/global/Master";
import { GetServerSideProps } from "next";
import { SessionType } from "../../types/sessionType";
import { getSession, useSession } from "next-auth/react";
import { ApiUrl } from "../../config/config";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { Button, Dialog } from "@material-tailwind/react";
import { useState } from "react";
import FormAddGayaBelajar from "@/components/beranda/murid/FormAddGayaBelajar";

function Profile() {
  const { data: session } = useSession() as { data: SessionType | null };
  const [openModal, setOpenModal] = useState(false);
  let photoProfile;
  if (session?.user?.role === "GURU") {
    if (session?.user?.Guru?.photo) {
      photoProfile = ApiUrl + "/" + session?.user.Guru?.photo;
    }
  } else if (session?.user?.role === "MURID") {
    if (session?.user?.Murid?.photo) {
      photoProfile = ApiUrl + "/" + session?.user.Murid?.photo;
    }
  }
  return (
    <Master title={"Profile Page"}>
      <div className="md:flex flex-col p-4 md:p-20   gap-8  md:items-start  min-h-screen">
        <div>
          <div className="md:flex md:px-10 py-20 md:mx-10 lg:mx-20 gap-8 justify-center items-center md:items-center bg-blue-100 rounded-lg">
            {photoProfile ? (
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-40 h-40 md:w-40 md:h-40 overflow-hidden">
                  <Image
                    src={photoProfile}
                    width={200} // Sesuaikan ukuran gambar jika perlu
                    height={200}
                    alt="Profile Picture"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    className="rounded-full w-full h-full"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-4">
                <HiOutlineUser className="w-40 h-40" />
              </div>
            )}
            <div className="flex flex-col gap-2 pt-2 md:pt-0 justify-center h-full ">
              <p className="text-center md:text-left text-black font-bold text-2xl">
                {session?.user?.name}
              </p>
              <p className="text-center md:text-left text-black font-bold">
                User Id : {session?.user?.userId}
              </p>
              <p className="text-center md:text-left text-black font-bold">
                Nomor Hp : {session?.user?.phoneNumber}
              </p>
              <p className="text-center md:text-left text-black font-bold">
                Role : {session?.user?.role}
              </p>
            </div>
          </div>
          <div className=" md:px-10 lg:px-20 py-4 mx-auto gap-8 ">
            {session?.user?.role === "MURID" && (
              <>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">
                    Gaya Belajar Kamu {session?.user?.Murid?.gayaBelajar}
                  </p>
                  <Button
                    className="bg-green-500"
                    onClick={() => setOpenModal(true)}
                  >
                    Pilih gaya belajar lagi
                  </Button>
                </div>
                {session?.user?.Murid?.gayaBelajar === "Visual" && (
                  <div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/img/gayaBelajar/visual.png"}
                        alt="Image gaya belajar Visual"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h2 className="font-bold text-black text-xl">
                      Apa Itu Gaya Belajar Visual?
                    </h2>
                    <p>
                      Gaya belajar visual adalah cara belajar di mana seseorang
                      lebih mudah memahami dan mengingat informasi ketika
                      disajikan dalam bentuk gambar, grafik, peta, diagram,
                      video, dan bentuk-bentuk visual lainnya. Individu dengan
                      gaya belajar ini cenderung berpikir dalam gambar dan lebih
                      menyukai informasi yang disajikan secara visual
                      dibandingkan dengan teks atau audio. Mereka lebih efektif
                      dalam memahami konsep melalui representasi visual dan
                      sering kali memiliki kemampuan yang baik dalam membaca
                      peta, menggambar, atau membayangkan skenario.
                    </p>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Teknik Belajar Seperti Apa yang Direkomendasikan?
                    </h2>
                    <p>
                      Bagi individu dengan gaya belajar visual, disarankan untuk
                      memanfaatkan alat-alat bantu visual dalam proses belajar.
                      Berikut adalah beberapa teknik yang dapat digunakan:
                    </p>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Menggunakan Mind Maps:</strong> Membuat peta
                        konsep atau mind maps dapat membantu menghubungkan
                        ide-ide dan memudahkan pemahaman.
                      </li>
                      <li>
                        <strong>Membuat Catatan Visual:</strong> Menggunakan
                        warna, gambar, dan simbol dalam catatan untuk menandai
                        informasi penting.
                      </li>
                      <li>
                        <strong>Menggunakan Infografis:</strong> Menggunakan
                        infografis atau grafik untuk menyederhanakan dan
                        meringkas informasi yang kompleks.
                      </li>
                      <li>
                        <strong>Belajar dengan Video:</strong> Menonton video
                        tutorial atau presentasi yang dilengkapi dengan elemen
                        visual.
                      </li>
                      <li>
                        <strong>Membaca Buku Bergambar:</strong> Memilih buku
                        atau materi yang memiliki banyak gambar, diagram, atau
                        ilustrasi untuk memperjelas teks.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Apa yang Harus Dilakukan?
                    </h2>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Menggunakan Media Visual:</strong> Gunakan
                        flashcards, diagram, peta, atau grafis untuk
                        mengorganisir dan mengingat informasi.
                      </li>
                      <li>
                        Membuat Koneksi Visual: Hubungkan konsep-konsep dengan
                        gambar atau simbol yang mudah diingat.
                      </li>
                      <li>
                        Berlatih Visualisasi: Ketika belajar atau mengingat
                        sesuatu, bayangkan informasi tersebut dalam bentuk
                        gambar di pikiran Anda.
                      </li>
                      <li>
                        Menciptakan Lingkungan Belajar Visual: Tempatkan poster,
                        peta, atau gambar di area belajar yang bisa memberikan
                        rangsangan visual.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Apa yang Harus Dihindari?
                    </h2>
                    <ul className="list-disc ml-5">
                      <li>
                        Mengandalkan Teks dan Audio Saja: Hindari terlalu banyak
                        bergantung pada catatan yang hanya berisi teks atau
                        materi yang hanya disampaikan secara lisan tanpa bantuan
                        visual.
                      </li>
                      <li>
                        Mengabaikan Pentingnya Warna dan Simbol: Jangan biarkan
                        catatan atau materi belajar Anda menjadi monoton dan
                        tidak menarik secara visual. Penggunaan warna dan simbol
                        dapat memperkuat ingatan.
                      </li>
                      <li>
                        Tidak Menggunakan Alat Bantu Visual: Mengabaikan
                        penggunaan alat bantu visual seperti diagram atau peta
                        dapat membuat proses belajar menjadi kurang efektif.
                      </li>
                    </ul>
                  </div>
                )}
                {session?.user?.Murid?.gayaBelajar === "Auditori" && (
                  <div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/img/gayaBelajar/Auditori.png"}
                        alt="Image gaya belajar Auditori"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h2 className="font-bold text-black text-xl">
                      Apa itu Gaya Belajar Auditori?
                    </h2>
                    <p>
                      Gaya belajar auditori adalah salah satu tipe belajar di
                      mana seseorang lebih mudah memahami, mengingat, dan
                      memproses informasi melalui pendengaran. Individu dengan
                      gaya belajar ini cenderung belajar lebih efektif dengan
                      mendengarkan ceramah, diskusi, rekaman suara, atau bahkan
                      berbicara dengan diri sendiri. Mereka biasanya unggul
                      dalam mendengarkan instruksi dan dapat mengingat dengan
                      baik apa yang telah mereka dengar.
                    </p>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Gaya Belajar Seperti Apa yang Direkomendasikan?
                    </h2>
                    <p>
                      Untuk memaksimalkan potensi belajar, individu dengan gaya
                      belajar auditori disarankan untuk:
                    </p>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Mengikuti Kuliah dan Diskusi:</strong>{" "}
                        Mendengarkan penjelasan dari guru atau dosen secara
                        langsung adalah metode yang sangat efektif.
                      </li>
                      <li>
                        <strong>Menggunakan Rekaman Audio:</strong> Merekam
                        ceramah atau pelajaran untuk didengarkan kembali dapat
                        membantu dalam memahami materi.
                      </li>
                      <li>
                        <strong>Membaca Keras:</strong> Membaca materi pelajaran
                        dengan suara keras dapat membantu memperkuat ingatan.
                      </li>
                      <li>
                        <strong>Berpartisipasi dalam Diskusi:</strong> Aktif
                        dalam diskusi kelompok akan memberikan kesempatan untuk
                        mendengar perspektif lain dan menjelaskan pemikiran
                        mereka sendiri, yang membantu dalam pemahaman dan
                        retensi informasi.
                      </li>
                      <li>
                        <strong>Menggunakan Mnemonik dan Lagu:</strong>{" "}
                        Menggunakan irama, lagu, atau rima untuk mengingat
                        informasi dapat sangat berguna.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Apa yang Harus Dilakukan?
                    </h2>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Mendengarkan Musik Latar:</strong> Beberapa
                        orang dengan gaya belajar auditori merasa lebih fokus
                        dengan musik latar yang lembut, meskipun ini dapat
                        bervariasi tergantung pada preferensi individu.
                      </li>
                      <li>
                        <strong>Belajar dalam Kelompok:</strong> Berbagi dan
                        berdiskusi tentang materi pelajaran dengan orang lain
                        dapat memperkuat pemahaman.
                      </li>
                      <li>
                        <strong>Mendengarkan Podcast atau Audiobook:</strong>{" "}
                        Menggunakan sumber daya audio seperti podcast atau
                        audiobook yang relevan dengan topik yang sedang
                        dipelajari dapat memperluas wawasan.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Apa yang Tidak Harus Dilakukan?
                    </h2>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>
                          Belajar dalam Lingkungan yang Terlalu Berisik:
                        </strong>{" "}
                        Meski belajar dengan suara mungkin membantu, lingkungan
                        yang terlalu bising dapat mengganggu konsentrasi.
                      </li>
                      <li>
                        <strong>Mengandalkan Hanya pada Visual:</strong>{" "}
                        Menggunakan terlalu banyak alat bantu visual tanpa
                        dukungan audio mungkin tidak efektif bagi gaya belajar
                        ini.
                      </li>
                      <li>
                        <strong>Menghindari Diskusi:</strong> Mengabaikan
                        kesempatan untuk berdiskusi atau mendengarkan penjelasan
                        dapat menghambat proses belajar.
                      </li>
                    </ul>
                    <p>
                      Dengan memahami dan menerapkan strategi yang sesuai,
                      individu dengan gaya belajar auditori dapat belajar lebih
                      efektif dan mencapai hasil yang optimal dalam pembelajaran
                      mereka.
                    </p>
                  </div>
                )}
                {session?.user?.Murid?.gayaBelajar === "Kinestetik" && (
                  <div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/img/gayaBelajar/kinetis.png"}
                        alt="Image gaya belajar Auditori"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h2 className="font-bold text-black text-xl">
                      Apa itu Gaya Belajar Kinetis?
                    </h2>
                    <p>
                      Gaya belajar kinetis, atau juga dikenal sebagai gaya
                      belajar fisik, adalah tipe gaya belajar di mana individu
                      lebih efektif memahami dan mengingat informasi melalui
                      aktivitas fisik dan pengalaman langsung. Orang dengan gaya
                      belajar ini cenderung menggunakan tubuh mereka secara
                      aktif untuk mengeksplorasi dan berinteraksi dengan dunia
                      di sekitar mereka. Mereka lebih mudah menyerap informasi
                      ketika mereka bisa melakukan sesuatu dengan tangan mereka,
                      bergerak, atau merasakan apa yang sedang mereka pelajari.
                    </p>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Ciri-Ciri Gaya Belajar Kinetis
                    </h2>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Aktif Secara Fisik:</strong> Belajar lebih
                        efektif melalui aktivitas fisik seperti gerakan tubuh,
                        bermain peran, atau menggunakan tangan.
                      </li>
                      <li>
                        <strong>Mengandalkan Sentuhan dan Gerakan:</strong>{" "}
                        Menggunakan tangan atau tubuh untuk membantu proses
                        pembelajaran.
                      </li>
                      <li>
                        <strong>Belajar Melalui Pengalaman Langsung:</strong>{" "}
                        Lebih suka mempelajari konsep melalui praktik langsung
                        atau eksperimen.
                      </li>
                      <li>
                        <strong>Suka Tantangan Fisik:</strong> Menyukai
                        aktivitas yang melibatkan keterampilan motorik seperti
                        olahraga, tarian, atau pekerjaan tangan.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Rekomendasi Metode Belajar untuk Gaya Belajar Kinetis
                    </h2>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Belajar Melalui Aktivitas Fisik:</strong>{" "}
                        Gunakan pendekatan yang memungkinkan gerakan fisik,
                        seperti belajar sambil berjalan, berolahraga, atau
                        menari.
                      </li>
                      <li>
                        <strong>Praktik Langsung:</strong> Melibatkan
                        eksperimen, proyek praktis, atau simulasi yang
                        memerlukan partisipasi fisik.
                      </li>
                      <li>
                        <strong>Penggunaan Alat Peraga:</strong> Menggunakan
                        alat bantu belajar yang bisa disentuh atau dimanipulasi,
                        seperti model, peralatan, atau alat tangan.
                      </li>
                      <li>
                        <strong>Role-playing:</strong> Melibatkan diri dalam
                        skenario atau bermain peran untuk memahami konsep atau
                        situasi.
                      </li>
                      <li>
                        <strong>Belajar Sambil Berdiri atau Bergerak:</strong>{" "}
                        Hindari belajar terlalu lama dalam posisi duduk. Cobalah
                        belajar sambil berjalan atau melakukan aktivitas yang
                        melibatkan gerakan.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Yang Harus Dilakukan
                    </h2>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Gunakan Seluruh Tubuh:</strong> Libatkan tubuh
                        dalam proses belajar, seperti dengan membuat gerakan
                        yang berhubungan dengan materi pelajaran.
                      </li>
                      <li>
                        <strong>Berikan Pengalaman Nyata:</strong> Mencoba
                        langsung atau melakukan percobaan untuk mempelajari
                        konsep baru.
                      </li>
                      <li>
                        <strong>Variasikan Posisi Belajar:</strong> Berganti
                        posisi antara duduk, berdiri, atau berjalan untuk
                        membantu meningkatkan fokus dan pemahaman.
                      </li>
                      <li>
                        <strong>Belajar Sambil Bermain:</strong> Gunakan
                        permainan yang melibatkan fisik untuk belajar, seperti
                        permainan edukatif yang melibatkan gerakan.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-bold text-black text-xl">
                      Yang Tidak Harus Dilakukan
                    </h2>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Mengabaikan Kebutuhan Gerakan:</strong>{" "}
                        Menghabiskan terlalu banyak waktu duduk diam atau
                        terlibat dalam aktivitas pasif seperti hanya membaca
                        atau mendengarkan ceramah.
                      </li>
                      <li>
                        <strong>Belajar Hanya dengan Teori:</strong> Menghindari
                        belajar hanya melalui bacaan atau teori tanpa disertai
                        praktik langsung.
                      </li>
                      <li>
                        <strong>
                          Memaksa Belajar dalam Situasi yang Membatasi Gerakan:
                        </strong>{" "}
                        Belajar dalam kondisi yang membatasi gerakan fisik
                        seperti ruang yang sempit atau dalam posisi yang tidak
                        nyaman.
                      </li>
                      <li>
                        <strong>Menekankan Hafalan Tanpa Praktik:</strong>{" "}
                        Hindari metode belajar yang hanya menekankan hafalan
                        tanpa keterlibatan fisik atau praktik nyata.
                      </li>
                    </ul>
                    <p>
                      Dengan memahami gaya belajar kinetis, individu dapat
                      menyesuaikan metode belajar mereka untuk lebih efektif dan
                      menyenangkan, sekaligus memaksimalkan potensi mereka dalam
                      menyerap informasi.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
          <Dialog
            open={openModal}
            size="lg"
            handler={() => setOpenModal(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            className="flex-row justify-center item-center"
          >
            <div className="w-full p-4 bg-white rounded-lg shadow-lg overflow-y-auto max-h-screen py-20">
              <FormAddGayaBelajar />
            </div>
          </Dialog>
        </div>
      </div>
    </Master>
  );
}

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: SessionType | null = (await getSession(
    context,
  )) as SessionType | null;

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const token = session?.accessToken;

  return {
    props: { token }, // You can pass additional props here if needed
  };
};
