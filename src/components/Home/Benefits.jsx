import CSSButton from "../button/CSSButton";

const Benefits = () => {
  return (
    <div className="flex justify-evenly w-full p-20">
      <div className="w-[100%]">
        <img
          src="https://script.viserlab.com/ptclab/demo/assets/images/frontend/about/6263ba6f2de1c1650702959.png"
          alt=""
        />
      </div>
      <div className="p-6">
        <h1 className="text-4xl font-bold py-4">About Click2Earn</h1>
        <p className="w-[600px]">
          Best Possible Way for Earn From Home. Temporibus eveniet commodi
          obcaecati voluptates reiciendis quis ipsum incidunt quibusdam aperiam
          autem suscipit maiores temporTemporibus eveniet commodi obcaecati
          voluptates reiciendis quis ipsum incidunt quibusdam aperiam autem
          suscipit maiores tempora impedit, exercitationem ratione distinctio
          nulla magni nemo cumque inventore sapiente nisi at vel. Laborum
          suscipit fuga.
        </p>
        <div className="py-4">
          <CSSButton cssbtn="Learn More" />
        </div>
      </div>
    </div>
  );
};
export default Benefits;
