import { Stats } from "../../../../components/stats";
import { Branding } from '../../../../components/branding'

export default function Page() {
	return (
		<main>
			<div className="flex items-center justify-between py-8 text-white">
				<Branding />
				<Stats />
			</div>
		</main>
	);
}
