import { render } from '@testing-library/react';
import RegionPage from './page'; // Ajusta la ruta según sea necesario

describe('RegionPage', () => {
  // const mockHouses = [
  //   { url: 'house1', name: 'House Stark', region: 'North', swornMembers: [], swornMembersDetails: [] },
  //   { url: 'house2', name: 'House Lannister', region: 'West', swornMembers: [], swornMembersDetails: [] },
  // ];

  const regionParams = Promise.resolve({ region: "North" }); // Asegúrate de que sea una promesa
  const regionParams2 = Promise.resolve({ region: "South" }); // Asegúrate de que sea una promesa


  it('renders the region name and houses', () => {
    render(<RegionPage params={regionParams} />);


  });

  it('shows a message when no houses are found', () => {
    render(<RegionPage  params={regionParams2} />);

  });
});