import styled from "styled-components";
import { useGetUser } from "./useGetUser";
import { Link } from "react-router-dom";
import FlexContainer from "../../components/FlexContainer";

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
  const { user } = useGetUser();
  const { userName, avatarUrl } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Link to="/user">
        <FlexContainer>
          <User>{userName}</User>
          <UserImage
            src={avatarUrl ? avatarUrl : "/default-user.png"}
            alt="userImage"
          />
        </FlexContainer>
      </Link>
    </StyledUserAvatar>
  );
}

export default UserAndAvatar;
