import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import {
	faArrowRight,
	faPhone,
	faCalendar,
	faCaretDown,
	faCaretUp,
	faClone,
	faDiceFive,
	faFilter,
	faHashtag,
	faClock,
	faSearch,
	faCity,
	faIdCard,
	faChessRook,
	faUser,
	faReceipt,
	faHouse,
    faArrowLeft,
    faBell,
    faChevronDown,
    faChevronRight,
    faCircleQuestion,
    faEdit,
    faEllipsis,
    faEye,
    faGear,
    faUserPlus,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"

library.add(
	faArrowRight,
	faCalendar,
	faCaretDown,
	faCaretUp,
	faChessRook,
	faCity,
	faClock,
	faClone,
	faDiceFive,
	faFilter,
	faHashtag,
	faHouse,
	faIdCard,
	faPhone,
	faReceipt,
	faSearch,
	faUser,
)

interface IconProps {
	testid?: string,
}

export const ArrowLeftIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faArrowLeft} data-test-id={testid} />
export const BellIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faBell} data-test-id={testid} />
export const ChevronDownIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faChevronDown} data-test-id={testid} />
export const ChevronRightIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faChevronRight} data-test-id={testid} />
export const CircleQuestionIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faCircleQuestion} data-test-id={testid} />
export const EditIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faEdit} data-test-id={testid} />
export const EllipsisIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faEllipsis} data-test-id={testid} />
export const EyeIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faEye} data-test-id={testid} />
export const GearIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faGear} data-test-id={testid} />
export const UserIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faUser} data-test-id={testid} />
export const UserPlusIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faUserPlus} data-test-id={testid} />
export const CloseIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faXmark} data-test-id={testid} />
export const ArrowRightIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faArrowRight} data-test-id={testid} />
export const CalendarIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faCalendar} data-test-id={testid} />
export const CaretDownIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faCaretDown} data-test-id={testid} />
export const CaretUpIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faCaretUp} data-test-id={testid} />
export const ChessRookIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faChessRook} data-test-id={testid} />
export const CityIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faCity} data-test-id={testid} />
export const ClockIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faClock} data-test-id={testid} />
export const CloneIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faClone} data-test-id={testid} />
export const DiceFiveIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faDiceFive} data-test-id={testid} />
export const FilterIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faFilter} data-test-id={testid} />
export const HashtagIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faHashtag} data-test-id={testid} />
export const HouseIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faHouse} data-test-id={testid} />
export const IdCardIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faIdCard} data-test-id={testid} />
export const PhoneIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faPhone} data-test-id={testid} />
export const ReceiptIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faReceipt} data-test-id={testid} />
export const SearchIcon = ({ testid }: IconProps) => <FontAwesomeIcon icon={faSearch} data-test-id={testid} />

export { FontAwesomeIcon } from "@fortawesome/react-fontawesome"