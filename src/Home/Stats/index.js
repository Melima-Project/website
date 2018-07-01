import React, { Fragment } from 'react';
import { PrettyText } from '@/shared/PrettyText';
import { Numeral } from '@/shared/Numeral';
import { Wrapper, Item, Label } from './styles';
import { StatsQuery } from './StatsQuery';

export const Stats = () => {
	return (
		<Wrapper>
			<StatsQuery
				render={({ totalArtists, totalReleases, totalPlays, priceUsd }) => (
					<Fragment>
						<Item>
							<PrettyText>
								<Numeral>{totalArtists}</Numeral>
							</PrettyText>
							<Label>Musicians</Label>
						</Item>
						<Item>
							<PrettyText>
								<Numeral>{totalReleases}</Numeral>
							</PrettyText>
							<Label>Tracks</Label>
						</Item>
						<Item>
							<PrettyText>
								<Numeral>{totalPlays}</Numeral>
							</PrettyText>
							<Label>Plays</Label>
						</Item>
						<Item>
							<PrettyText>
								<Numeral format="MUSIC0,0[.]00">{totalPlays}</Numeral>
							</PrettyText>
							<Label>Paid</Label>
						</Item>
					</Fragment>
				)}
			/>
		</Wrapper>
	);
};
