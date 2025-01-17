import Master from "@/components/global/Master";
import { GetServerSideProps } from "next";
import Api from "../../service/Api";
import { SessionType } from "../../types/sessionType";
import { getSession } from "next-auth/react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

function DetailMateri({ materiData, userType }: any) {
  const router = useRouter();
  if (!materiData) {
    return (
      <Master title="Detail materi">
        <div className="w-screen h-screen flex justify-center items-center">
          Materi tidak ditemukan
        </div>
      </Master>
    );
  }

  const handleViewSoal = () => {
    router.push({
      pathname: "/soal",
      query: { materiId: materiData.id }, // Mengirim data menggunakan state
    });
  };

  const handleViewSoalMurid = () => {
    router.push({
      pathname: "/soal-murid",
      query: { materiId: materiData.id }, // Mengirim data menggunakan state
    });
  };

  return (
    <Master title="Detail materi">
      <div className="px-4 md:px-20 py-10">
        <div className="md:flex mb-4 w-full justify-between items-center ">
          <p className="text-md md:text-lg lg:text-4xl font-bold mb-4 leading-tight">
            {materiData.title}
          </p>
          <Button
            size="sm"
            className="mr-2 bg-buttonGreen w-full md:w-40"
            onClick={userType === "GURU" ? handleViewSoal : handleViewSoalMurid}
          >
            Lihat soal
          </Button>
        </div>
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg "
            src={`https://www.youtube.com/embed/${new URLSearchParams(
              new URL(materiData.videoUrl).search,
            ).get("v")}`}
            allowFullScreen
          />
        </div>

        <div
          className="mt-4 text-justify text-black"
          dangerouslySetInnerHTML={{ __html: materiData.content }}
        />
      </div>
    </Master>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { materi } = context.query;
  const session: SessionType | null = (await getSession(
    context,
  )) as SessionType | null;
  const userType = session?.user?.role;
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const api = new Api();
  api.url = `/materi/get-id-materi`;
  api.auth = true;
  api.token = session.accessToken;
  api.body = { id: parseInt(materi as string, 10) };

  try {
    const response = await api.call();

    if (response?.meta?.statusCode === 200) {
      // Gunakan optional chaining untuk menghindari error
      return {
        props: {
          materiData: response.data,
          userType,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default DetailMateri;
