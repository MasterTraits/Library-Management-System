import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react"; 

export default function CardDivider() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Group 3</p>
          <p className="text-small text-default-500">Information Management</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>This is a quick project to the Information Management coursed handled by Mrs. May Figueroa.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/MasterTraits/Library-Management-System"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}