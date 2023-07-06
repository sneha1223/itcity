// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchAsyncBrand, getAllBrands,  setSelectedBrand } from '../../Store/brandSlice'

// function BrandFilter() {
//     const dispatch = useDispatch()

//    const brandData = useSelector(getAllBrands);
//    console.log("brandData", brandData);

//    const selectedBrands = useSelector((state)=>state.brands.selectedBrands)
//    console.log(selectedBrands);

//    useEffect(()=>{
//     dispatch(fetchAsyncBrand(getAllBrands))
//    },[dispatch])

//    const handleBrandSelected = (brand) =>{
//      console.log(brand);
//      if(selectedBrands.includes(brand)){
//         dispatch(setSelectedBrand(selectedBrands.filter(selectedBrand=>selectedBrand !== brand)))
//      }else {
//        dispatch(setSelectedBrand([...selectedBrands,brand]))
//      }

//    }
//   return (
//     <div>
//         { selectedBrands.map((val)=>{
//             return(
//                 <>
//                 <div className='checkbooxes'>
//                     <label>
//                         <input
//                            type='checkbox'
//                            value={val.brands_id}
//                            checked={selectedBrands.includes(val.brands_id)} 
//                            onChange={()=>handleBrandSelected(val.brands_id)}
//                            />
//                            {val.brands_name}
//                     </label>

//                 </div>
//                 </>
//             )
//         })}
//     </div>
//   )
// }

// export default BrandFilter;

// import React, { useEffect } from 'react';
// import { fetchAsyncBrandCategories,getBrandByCategories, setSelectedData } from '../Redux/BrandSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import { setSelectedBrand } from '../../Store/brandSlice';
// // import {setSelectedBrands,setSelectedData } from '../Redux/BrandSlice'

// export default function BrandFilter() {
//       const dispatch = useDispatch()
//       const BrandData = useSelector(getBrandByCategories)
//       console.log("BrandData",BrandData);

//       const selectedBrands = useSelector((state) => state.brands.selectedBrands)
//       console.log(selectedBrands);

//       useEffect(() => {
//         dispatch(fetchAsyncBrandCategories(getBrandByCategories))
//                     },[])

//       const handleBrandSelect = (brand) => {
//         console.log((brand));
//         if (selectedBrands.includes(brand)) {
//           dispatch(setSelectedBrands(selectedBrands.filter(selectedBrand => selectedBrand !== brand)));
//         } else {
//           dispatch(setSelectedBrands([...selectedBrands,brand]));
//         }
//       };

//   return (
//     <div>
//          {BrandData.map((vaal)=>{
//                   return(
//                            <>
//                            <div className='checkboxes'>
//                              <label>
//                                <input
//                                  type="checkbox"
//                                   value={vaal.brands_id}
//                                   checked={selectedBrands.includes(vaal.brands_id)}
//                                   onChange={()=> handleBrandSelect(vaal.brands_id)}
//                                   // name={vaal.brands_id} 
//                                /> {vaal.brands_name}
//                              </label><br></br>
//                            </div>
//                          </>
//                   )
//          })}
//     </div>
//   )
// }


// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchAsyncBrand,  getBrandByCategories } from '../../Store/brandSlice';
// import { setSelectedBrand,setSelectedData } from '../../Store/brandSlice';


// export default function BrandFilter() {
//     const dispatch = useDispatch();
//     const filterBrand = useSelector(getBrandByCategories);
//     console.log("filterBrand",filterBrand);

//     const brandSelect = useSelector((state) => state.brand.selectedBrand)
//     console.log("brand select",brandSelect);

//     useEffect(() => {
//         dispatch(fetchAsyncBrand(getBrandByCategories))
//     }, [dispatch])

//     const handleBrandSelected = (brand) => {
//         console.log("brand", brand)

//         if (brandSelect.includes(brand)) {
//             dispatch(setSelectedBrand(brandSelect.filter(selectBrand => selectBrand !== brand)));
//         } else {
//             dispatch(setSelectedBrand([...brandSelect, brand]))
//         }
//     }
//     return (
//         <div>
//             {filterBrand.map((val) => {
//                 return (
//                     <>
//                         <div className='checkbooxes'>
//                             <label>
//                                 <input
//                                     type='checkbox'
//                                     value={val.brands_id}
//                                     checked={brandSelect.includes(val.brands_id)}
//                                     onChange={() => handleBrandSelected(val.brands_id)}
//                                 />
//                                 {val.brands_name}
//                             </label>

//                         </div>
//                     </>
//                 )
//             })}
//         </div>
//     )
// }



// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchAsyncBrandFilter, getBrandFilter, setSelectedBrand } from '../../Store/brandSlice'

// export default function BrandFilter () {

//     const dispatch = useDispatch();

//     const filterBrand = useSelector(getBrandFilter)
//     console.log("filter brand", filterBrand);

// const selectedBrands = useSelector((state) => state.brands.selectedBrands)
// console.log("selected Brands", selectedBrands);

// useEffect(() => {
//     dispatch(fetchAsyncBrandFilter(getBrandFilter))
// }, [])

// const handleBrandSelected = (brand) => {
//     console.log((brand));
//     if (selectedBrands.includes(brand)) {
//         dispatch(setSelectedBrand(selectedBrands.filter(selectedBrand => selectedBrand !== brand)));
//     } else {
//         dispatch(setSelectedBrand([...selectedBrands, brand]));
//     }
// };

// return (
//     <div>
//         {filterBrand.map((val) => {
//             return (
//                 <>
//                     <div className='checkbooxes'>
//                         <label>
//                             <input
//                                 type='checkbox'
//                                 value={val.brands_id}
//                                 checked={selectedBrands.includes(val.brands_id)}
//                                 onChange={() => handleBrandSelected(val.brands_id)}
//                             />
//                             {val.brands_name}
//                         </label>

//                     </div>
//                 </>
//             )
//         })}
//     </div>
// )


//     }

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchAsyncBrandFilter, getBrandFilter } from '../../Store/brandSlice'

// const BrandFilter = () => {
//     const dispatch = useDispatch()
//     const filterBrand = useSelector(getBrandFilter);
//     useEffect(() => {
//         dispatch(fetchAsyncBrandFilter())
//     })
//     return (
//         <div>
//             <div>
//                 {filterBrand.map((val) => {
//                     return (
//                         <>
//                             <div className='checkbooxes'>
//                                 <label>
//                                     <input
//                                         type='checkbox'
//                                         value={val.brands_id}
//                                         checked={selectedBrands.includes(val.brands_id)}
//                                         onChange={() => handleBrandSelected(val.brands_id)}
//                                     />
//                                     {val.brands_name}
//                                 </label>

//                             </div>
//                         </>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default BrandFilter

import React, { useEffect } from 'react';
import { fetchAsyncBrandCategories,getBrandByCategories } from '../../Store/brandSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedBrands } from '../../Store/brandSlice';
import './BrandFilter.css'

export default function BrandFilter() {
      const dispatch = useDispatch()
      const BrandData = useSelector(getBrandByCategories)
      console.log("BrandData",BrandData);

      const selectedBrands = useSelector((state) => state.brands.selectedBrands)
      console.log("selected brand",selectedBrands);

      useEffect(() => {
        dispatch(fetchAsyncBrandCategories(getBrandByCategories))
                    },[dispatch])

      const handleBrandSelect = (brand) => {
        console.log((brand));
        if (selectedBrands.includes(brand)) {
          dispatch(setSelectedBrands(selectedBrands.filter(selectedBrand => selectedBrand !== brand)));
        } else {
          dispatch(setSelectedBrands([...selectedBrands,brand]));
        }
      };

  return (
    <div className='mt-4'>
         {BrandData.map((vaal)=>{
                  return(
                           
                           <div className='checkboxes'>
                             <label>
                               <input
                                 type="checkbox"
                                  value={vaal.brands_id}
                                  checked={selectedBrands.includes(vaal.brands_id)}
                                  onChange={()=> handleBrandSelect(vaal.brands_id)}
                                  // name={vaal.brands_id} 
                               /> {vaal.brands_name}
                             </label><br></br>
                           </div>
                        
                  )
         })}
    </div>
  )
}