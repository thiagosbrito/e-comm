import Fullbanner from "./components/Fullbanner";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import { FullbannerItem } from "./interface";
import { client } from "./lib/sanity";

async function getData() {
  	const query = `*[_type == "fullbanner" && active] {
      	_id,
      	title,
      	description,
      	image,
      	title_color,
      	description_color,
      	link-> {
          "slug": slug.current,
      	}
  	}`;
  	const data: Array<FullbannerItem> = await client.fetch(query);
	console.log(data);
  	return data;
}

export const dynamic = "force-dynamic";

export default async function Home() {
	const data = await getData();
  	return (
    	<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      		<Fullbanner
				images={data}
			/>
      		<Hero />
      		<Newest />
    	</div>
  	);
}