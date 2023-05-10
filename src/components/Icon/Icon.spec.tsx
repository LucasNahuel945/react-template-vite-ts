import { render } from "@testing-library/react";
import {
  ArrowLeftIcon,
  BellIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleQuestionIcon,
  EditIcon,
  EllipsisIcon,
  EyeIcon,
  GearIcon,
  UserIcon,
  UserPlusIcon,
  CloseIcon,
  ArrowRightIcon,
  CalendarIcon,
  CaretDownIcon,
  CaretUpIcon,
  ChessRookIcon,
  CityIcon,
  ClockIcon,
  CloneIcon,
  DiceFiveIcon,
  FilterIcon,
  HashtagIcon,
  HouseIcon,
  IdCardIcon,
  PhoneIcon,
  ReceiptIcon,
  SearchIcon,
} from "./index";

describe("Iconos", () => {
  it("testing icon rendering", () => {
    const { getByTestId } = render(
      <>
        <ArrowLeftIcon testid='ArrowLeftIcon' />
        <BellIcon testid='BellIcon' />
        <ChevronDownIcon testid='ChevronDownIcon' />
        <ChevronRightIcon testid='ChevronRightIcon' />
        <CircleQuestionIcon testid='CircleQuestionIcon' />
        <EditIcon testid='EditIcon' />
        <EllipsisIcon testid='EllipsisIcon' />
        <EyeIcon testid='EyeIcon' />
        <GearIcon testid='GearIcon' />
        <UserIcon testid='UserIcon' />
        <UserPlusIcon testid='UserPlusIcon' />
        <CloseIcon testid='CloseIcon' />
        <ArrowRightIcon testid='ArrowRightIcon' />
        <CalendarIcon testid='CalendarIcon' />
        <CaretDownIcon testid='CaretDownIcon' />
        <CaretUpIcon testid='CaretUpIcon' />
        <ChessRookIcon testid='ChessRookIcon' />
        <CityIcon testid='CityIcon' />
        <ClockIcon testid='ClockIcon' />
        <CloneIcon testid='CloneIcon' />
        <DiceFiveIcon testid='DiceFiveIcon' />
        <FilterIcon testid='FilterIcon' />
        <HashtagIcon testid='HashtagIcon' />
        <HouseIcon testid='HouseIcon' />
        <IdCardIcon testid='IdCardIcon' />
        <PhoneIcon testid='PhoneIcon' />
        <ReceiptIcon testid='ReceiptIcon' />
        <SearchIcon testid='SearchIcon' />
      </>
    );

    expect(getByTestId('ArrowLeftIcon')).toBeInTheDocument();
    expect(getByTestId('BellIcon')).toBeInTheDocument();
    expect(getByTestId('ChevronDownIcon')).toBeInTheDocument();
    expect(getByTestId('ChevronRightIcon')).toBeInTheDocument();
    expect(getByTestId('CircleQuestionIcon')).toBeInTheDocument();
    expect(getByTestId('EditIcon')).toBeInTheDocument();
    expect(getByTestId('EllipsisIcon')).toBeInTheDocument();
    expect(getByTestId('EyeIcon')).toBeInTheDocument();
    expect(getByTestId('GearIcon')).toBeInTheDocument();
    expect(getByTestId('UserIcon')).toBeInTheDocument();
    expect(getByTestId('UserPlusIcon')).toBeInTheDocument();
    expect(getByTestId('CloseIcon')).toBeInTheDocument();
    expect(getByTestId('ArrowRightIcon')).toBeInTheDocument();
    expect(getByTestId('CalendarIcon')).toBeInTheDocument();
    expect(getByTestId('CaretDownIcon')).toBeInTheDocument();
    expect(getByTestId('CaretUpIcon')).toBeInTheDocument();
    expect(getByTestId('ChessRookIcon')).toBeInTheDocument();
    expect(getByTestId('CityIcon')).toBeInTheDocument();
    expect(getByTestId('ClockIcon')).toBeInTheDocument();
    expect(getByTestId('CloneIcon')).toBeInTheDocument();
    expect(getByTestId('DiceFiveIcon')).toBeInTheDocument();
    expect(getByTestId('FilterIcon')).toBeInTheDocument();
    expect(getByTestId('HashtagIcon')).toBeInTheDocument();
    expect(getByTestId('HouseIcon')).toBeInTheDocument();
    expect(getByTestId('IdCardIcon')).toBeInTheDocument();
    expect(getByTestId('PhoneIcon')).toBeInTheDocument();
    expect(getByTestId('ReceiptIcon')).toBeInTheDocument();
    expect(getByTestId('SearchIcon')).toBeInTheDocument();
  });
});