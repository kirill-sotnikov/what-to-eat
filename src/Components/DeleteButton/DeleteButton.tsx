import "./DeleteButton.css";

export default function DeleteButton({
  removedItem,
  onClick,
}: {
  removedItem: string;
  onClick: () => void;
}) {
  return (
    <div>
      <button
        className="deleteButton"
        onClick={() => {
          localStorage.removeItem(removedItem);
          onClick();
        }}
      >
        x
      </button>
    </div>
  );
}
