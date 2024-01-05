import React from 'react'
import { useAppSelector, useAppDispatch } from '@hooks/useRedux'
import { setSelectedYear } from '@store/features/system/systemSlice'
import Button from '@components/Button/Button'
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

  const NavButton = ({ yr }: { yr: number }) => {
    return year == yr ?
      <Button
        label={String(yr)}
        className="!bg-white !text-cyan-900 hover:!white hover:!text-cyan-900"
      />
      :
      <Button
        onClick={() => { handleChangeYear(yr) }}
        label={String(yr)}
        className="text-white hover:bg-cyan-400"
      />

  }
  return (
    <div>
      <div className="mt-[50px]">

        {year == 2020 && <S2020 />}
        {year == 2021 && <S2021 />}
        {year == 2022 && <S2022 />}
        {year == 2023 && <S2023 />}

        <ol className="mt-[30px] sm:mt-[60px] mb-[20px] !text-[14px] sm:!text-[24px] md:!text-[30px] flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <NavButton yr={2020} />
            </span>
          </li>
          <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <NavButton yr={2021} />
            </span>
          </li>
          <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <NavButton yr={2022} />
            </span>
          </li>
          <li className="flex items-center ">
            <NavButton yr={2023} />
          </li>
        </ol>

      </div>
    </div>
  )
}

export default Demo