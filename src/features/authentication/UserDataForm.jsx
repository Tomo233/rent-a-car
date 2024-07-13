import styled from "styled-components";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import { useLogout } from "./useLogout";
import { useUser } from "./useUser";
import { useUpdateUserAvatar } from "./useUpdateUserAvatar";
import { useDeleteUserAvatar } from "./useDeleteUserAvatar";
import toast from "react-hot-toast";

const StyledSettingsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 45px;
  width: 350px;
  border: 1px solid var(--color-border-gray);
  border-radius: 5px;
  padding-left: 10px;
`;

const ChangeAvatar = styled.div`
  margin-left: 20px;
`;

const ChangeUserData = styled.div`
  margin-top: 80px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.$gap || "0px"};
`;

const Grid = styled.div`
  display: grid;
  gap: ${(props) => props.$gap || "0px"};
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: var(--color-primary-blue);
  font-weight: 500;
`;

function UserDataForm() {
  const { user } = useUser();
  const { logout, isLoading } = useLogout();
  const { updateUser, isLoading: isUpdatingUser } = useUpdateUserAvatar();
  const { deleteAvatar, isDeleting } = useDeleteUserAvatar();

  if (isLoading || isUpdatingUser || isDeleting) return <p>loading</p>;

  const { email, phone, userName, avatarUrl } = user?.user_metadata || "";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }
    updateUser(selectedFile);
  };

  const handleDeleteAvatar = () => {
    const imageName = avatarUrl?.split("/").at(-1);

    if (!imageName) return;

    deleteAvatar(imageName);
  };

  return (
    <StyledSettingsForm>
      <ChangeAvatar>
        <Flex $gap="10px">
          {avatarUrl ? (
            <img src={avatarUrl} height="125px" alt="" />
          ) : (
            <div style={{ backgroundColor: "black" }}>
              <img src="/default-user.png" height="125px" alt="" />
            </div>
          )}
          <Button type="short" onClick={handleDeleteAvatar}>
            remove avatar
          </Button>
          <FileInput onChange={handleFileChange} />
        </Flex>
      </ChangeAvatar>
      <ChangeUserData>
        <Grid $gap="35px">
          <div>
            <Heading as="h3" $notaligned={true}>
              User Data
            </Heading>
            <StyledInput
              type="text"
              placeholder="User Name"
              disabled={true}
              value={userName || ""}
            />
            <StyledInput
              type="email"
              placeholder="Email"
              disabled={true}
              value={email || ""}
            />
            <StyledInput
              type="tel"
              placeholder="Phone number"
              disabled={true}
              value={phone || ""}
            />
          </div>

          <div>
            <Heading as="h3" $notaligned={true}>
              Change password
            </Heading>
            <Flex $gap="30px">
              <Grid $gap="5px">
                <Label>Old Password</Label>
                <StyledInput type="password" placeholder="********" />
              </Grid>
              <Grid $gap="5px">
                <Label>New Password</Label>
                <StyledInput type="password" placeholder="********" />
              </Grid>
            </Flex>
          </div>

          <Flex $gap="10px">
            <Button onClick={logout}>Logout</Button>
          </Flex>
        </Grid>
      </ChangeUserData>
    </StyledSettingsForm>
  );
}

export default UserDataForm;
