import React, { useEffect } from 'react';
import { fetchAsyncBrandCategories, getBrandByCategories, setSelectedData } from '../store/brandSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedBrands } from '../store/brandSlice';

export default function BrandFilter() {
  const dispatch = useDispatch()
  const BrandData = useSelector(getBrandByCategories)
  console.log("BrandData", BrandData);

  const selectedBrands = useSelector((state) => state.brands.selectedBrands)
  console.log(selectedBrands);

  useEffect(() => {
    dispatch(fetchAsyncBrandCategories(getBrandByCategories))
  }, [])

  const handleBrandSelect = (brand) => {
    console.log((brand));
    if (selectedBrands.includes(brand)) {
      dispatch(setSelectedBrands(selectedBrands.filter(selectedBrand => selectedBrand !== brand)));
    } else {
      dispatch(setSelectedBrands([...selectedBrands, brand]));
    }
  };

  return (
    <div>
      {BrandData.map((vaal) => {
        return (
          <>
            <div className='checkboxes'>
              <label>
                <input
                  type="checkbox"
                  value={vaal.brands_id}
                  checked={selectedBrands.includes(vaal.brands_id)}
                  onChange={() => handleBrandSelect(vaal.brands_id)}
                // name={vaal.brands_id} 
                /> {vaal.brands_name}
              </label><br></br>
            </div>
          </>
        )
      })}
    </div>
  )
}