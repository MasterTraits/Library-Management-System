import {User, Link} from "@nextui-org/react";

export default function UserIcon() {
  return (
    <User   
      name=" John Emmanuel"
      description={(
        <Link href="" size="sm" isExternal>
          @ Rizal Technological University
        </Link>
      )}
      avatarProps={{
        src: "/cat.jpg",
      }}
      className="bg-white text-black p-3 rounded-lg shadow-md"
    />
  );
}