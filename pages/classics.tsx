import React from 'react';
import InfoCard from '../components/InfoCard';

const CLASSIC_COCKTAILS = [
  {
    id: 1,
    name: 'Margerita',
    description:
      'Tequila and triple sec combine in this fabulous short cocktail mixed with lime juice. Garnish the rim of the glass with salt for that extra punch',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  },
  {
    id: 2,
    name: 'Pina Colada',
    description:
      'A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal.',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg',
  },
  {
    id: 1,
    name: 'Margerita',
    description:
      'Tequila and triple sec combine in this fabulous short cocktail mixed with lime juice. Garnish the rim of the glass with salt for that extra punch',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  },
  {
    id: 2,
    name: 'Pina Colada',
    description:
      'A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal.',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg',
  },
  {
    id: 1,
    name: 'Margerita',
    description:
      'Tequila and triple sec combine in this fabulous short cocktail mixed with lime juice. Garnish the rim of the glass with salt for that extra punch',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  },
  {
    id: 2,
    name: 'Pina Colada',
    description:
      'A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal.',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg',
  },
  {
    id: 1,
    name: 'Margerita',
    description:
      'Tequila and triple sec combine in this fabulous short cocktail mixed with lime juice. Garnish the rim of the glass with salt for that extra punch',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  },
  {
    id: 2,
    name: 'Pina Colada',
    description:
      'A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal.',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg',
  },
  {
    id: 1,
    name: 'Margerita',
    description:
      'Tequila and triple sec combine in this fabulous short cocktail mixed with lime juice. Garnish the rim of the glass with salt for that extra punch',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  },
  {
    id: 2,
    name: 'Pina Colada',
    description:
      'A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal.',
    imageUrl:
      'https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg',
  },
];

interface Props {}

interface Cocktail {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Classics = (props: Props) => {
  const cocktailList: Array<Cocktail> = CLASSIC_COCKTAILS;
  console.log(CLASSIC_COCKTAILS);
  return (
    <>
      <div>Classics</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cocktailList.map((cocktail) => {
          return (
            <>
              <div key={cocktail.id} style={{ padding: '0 10px 10px 0' }}>
                <InfoCard
                  title={cocktail.name}
                  description={cocktail.description}
                  imageUrl={cocktail.imageUrl}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Classics;
