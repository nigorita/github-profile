import React from "react";
import pic from "./neg.jpg";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const profileQuery = gql`
  {
    github {
      user(username: "nigorita") {
        id
        avatar_url
        login
        repos {
          name
        }
      }
    }
  }
`;

export default function Profile() {
  const { loading, error, data } = useQuery(profileQuery);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error..</p>;

  return (
    <div>
      {data.github.user.login}

      <div>
        <img src={data.github.user.avatar_url} alt="negar's pic" />
      </div>

      {data.github.user.id}
      {data.github.user.repos.map(repo => (
        <div>{repo.name}</div>
      ))}
    </div>
  );
}
