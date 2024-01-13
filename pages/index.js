import Link from "next/link";
import Card from "@/components/Card";

export default function HomePage() {
  return (
    <Card>
      <h1>Hello and welcome to my Game of Thrones page!</h1>
      <p>
        Please feel free to have a look at this collection of the houses,
        persons and quotes of the series.
      </p>
      <p>
        The data you can find here is based on{" "}
        <Link href="https://gameofthronesquotes.xyz/">this API!</Link>
      </p>
      <p>
        Background picture by{" "}
        <Link href="https://unsplash.com/@alvymartinez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Alvy Martinez
        </Link>{" "}
        on{" "}
        <Link href="https://unsplash.com/photos/aerial-view-of-bridge-by-the-body-of-water-MUBYGNI4gM0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </Link>
      </p>
    </Card>
  );
}
