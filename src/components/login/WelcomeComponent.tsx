import Image from "next/image";

function WelcomeComponent() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-cyan-200 h-full rounded-lg flex justify-center items-center">
      <Image
        width={600}
        height={20}
        src={"/img/login/login.png"}
        alt="Iustrator Login"
        priority
      />
    </div>
  );
}

export default WelcomeComponent;
