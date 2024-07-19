import styled from "styled-components";
import { useUser } from "./useUser";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex";

const StyledUserAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

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
    <StyledUserAvatar>
      <Link to="/user">
        <Flex>
          <User>{userName}</User>
          <UserImage
            src={avatarUrl ? avatarUrl : "/default-user.png"}
            alt="userImage"
          />
        </Flex>
      </Link>
    </StyledUserAvatar>
  );
}

export default UserAndAvatar;
