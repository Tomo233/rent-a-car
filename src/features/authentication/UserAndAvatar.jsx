import styled from "styled-components";
import { useUser } from "./useUser";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex";

const UserImage = styled.img`
  width: 40px;
`;

const User = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 600;
`;

function UserAndAvatar() {
  const { user } = useUser();
  const { userName, avatarUrl } = user.user_metadata;

  return (
    <Flex gap="15px">
      <Link to="/user">
        <Flex>
          <User>{userName}</User>
          <UserImage
            src={avatarUrl ? avatarUrl : "/default-user.png"}
            alt="userImage"
          />
        </Flex>
      </Link>
    </Flex>
  );
}

export default UserAndAvatar;
