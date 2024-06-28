import styled from "styled-components";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { useLogout } from "./useLogout";
import { useGetUser } from "./useGetUser";

const StyledSettingsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 200px;
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
  gap: ${(props) => (props.gap ? `${props.gap}` : "")};
`;

const Grid = styled.div`
  display: grid;
  gap: ${(props) => (props.gap ? props.gap : "")};
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: var(--color-primary-blue);
  font-weight: 500;
`;

function UserDataForm() {
  const { user } = useGetUser();
  const { logout, isLoading } = useLogout();

  if (isLoading) return <p>logging out</p>;

  const { email, phone, userName } = user?.user_metadata || "";
  console.log(user);
  return (
    <StyledSettingsForm>
      <ChangeAvatar>
        <Flex gap="10px">
          <div style={{ backgroundColor: "black" }}>
            <img src="./default-user.png" height="150px" alt="" />
          </div>
          <Button type="short">remove avatar</Button>
          <Button type="short">change avatar</Button>
        </Flex>
      </ChangeAvatar>
      <ChangeUserData>
        <Grid gap="35px">
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
            <Flex gap="30px">
              <Grid gap="5px">
                <Label>Old Password</Label>
                <StyledInput type="password" placeholder="********" />
              </Grid>
              <Grid gap="5px">
                <Label>New Password</Label>
                <StyledInput type="password" placeholder="********" />
              </Grid>
            </Flex>
          </div>

          <Flex gap="10px">
            <Button>Save</Button>
            <Button onClick={logout}>Logout</Button>
          </Flex>
        </Grid>
      </ChangeUserData>
    </StyledSettingsForm>
  );
}

export default UserDataForm;
