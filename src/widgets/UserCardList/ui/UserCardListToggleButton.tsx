export const UserCardListToggleButton = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick}>데이터{isActive ? '가져옴' : '안가져옴'}</button>
  );
};
