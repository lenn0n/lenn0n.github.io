import React from 'react'
import { useAppSelector, useAppDispatch } from '@hooks/useRedux'
import { setSelectedYear } from '@store/features/system/systemSlice'
import S2020 from './Sites/S2020/S2020'
import S2021 from './Sites/S2021/S2021'
import S2022 from './Sites/S2022/S2022'
import S2023 from './Sites/S2023/S2023'

type Props = {}

function Demo({ }: Props) {
  const dispatch = useAppDispatch()
  const year = useAppSelector((state) => state.system.selectedYear)

  const handleChangeYear = (year: number) => {
    dispatch(setSelectedYear(year))
  }
  return (
    <div>
      <div className="mt-[50px]">
        <div className="flex gap-3 text-[20px] mb-2">
          <div
            role="button"
            onClick={() => { handleChangeYear(2020) }}
            className={`${year == 2020 ? 'font-bold text-yellow-500' : 'text-white'}`}>
            2020
          </div>
          <div
            role="button"
            onClick={() => { handleChangeYear(2021) }}
            className={`${year == 2021 ? 'font-bold text-yellow-500' : 'text-white'}`}>
            2021
          </div>
          <div
            role="button"
            onClick={() => { handleChangeYear(2022) }}
            className={`${year == 2022 ? 'font-bold text-yellow-500' : 'text-white'}`}>
            2022
          </div>
          <div
            role="button"
            onClick={() => { handleChangeYear(2023) }}
            className={`${year == 2023 ? 'font-bold text-yellow-500' : 'text-white'}`}>
            2023
          </div>
        </div>

        {year == 2020 && <S2020 />}
        {year == 2021 && <S2021 />}
        {year == 2022 && <S2022 />}
        {year == 2023 && <S2023 />}

      </div>
    </div>
  )
}

export default Demo