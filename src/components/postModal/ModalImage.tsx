interface Props {
  image: string;
}

function ModalImage({ image }: Props) {
  return (
    <div
      className="modal-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

export default ModalImage;
