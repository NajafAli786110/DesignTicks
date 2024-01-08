import { useEffect, useState } from 'react';
import OurWork from './Home/OurWork';


const OurWorkContainer = () => {
  const [caseStudiesData, setCaseStudiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://designticks.simationtechnologies.com/index.php?rest_route=/wp/v2/our-work');
        const data = await response.json();
        setCaseStudiesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <OurWork caseStudiesData={caseStudiesData} />;
};

export default OurWorkContainer;