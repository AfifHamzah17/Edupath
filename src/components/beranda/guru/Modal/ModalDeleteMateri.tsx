import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { useMateri } from "../../../../../hooks/useMateri";

interface ModalDeleteMateriProps {
  token: string;
  onClose: () => void;
  materiId: number | null;
}

function ModalDeleteMateri({
  token,
  onClose,
  materiId,
}: ModalDeleteMateriProps) {
  const { deleteMateri } = useMateri(token);

  const handleDelete = async () => {
    const result = await deleteMateri(materiId!);
    if (result.success) {
      onClose(); // Close the modal only on success
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Image
        src={"/img/home/deleteAsset.png"}
        width={200}
        height={200}
        alt="Delete Confirmation"
      />
      <p className="text-lg font-bold text-black mb-4">
        Apakah Anda yakin ingin menghapus Materi ini?
      </p>
      <div className="flex gap-4">
        <Button color="red" onClick={handleDelete}>
          Hapus
        </Button>
        <Button color="blue" onClick={onClose}>
          Batal
        </Button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default ModalDeleteMateri;
