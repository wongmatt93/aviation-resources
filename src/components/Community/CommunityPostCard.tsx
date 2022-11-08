import "./CommunityPostCard.css";

interface Props {
  item: number;
}

const CommunityPostCard = ({ item }: Props) => {
  return (
    <li className="CommunityPostCard">
      <p>{item}</p>
    </li>
  );
};

export default CommunityPostCard;
