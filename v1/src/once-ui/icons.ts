import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniMinus,
	HiMiniPlus,
	HiMiniUser,
	HiMiniXMark,
	HiEyeDropper,
	HiOutlineLink,
	HiExclamationTriangle,
	HiArrowUpRight,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle
} from "react-icons/hi2";

import {
	FaDiscord,
	FaGithub,
	FaJs,
	FaNodeJs,
	FaReact,
	FaHtml5,
	FaCss3,
	FaAws,
	FaJava,
	FaShopify,
	FaLinkedin
} from "react-icons/fa6";

import {
	DiPostgresql,
	DiMongodb
} from "react-icons/di";

import {
	SiNestjs,
} from "react-icons/si";

import{
MdEmail
}from "react-icons/md"


export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	eyeDropper: HiEyeDropper,
	person: HiMiniUser,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	discord: FaDiscord,
	github: FaGithub,
	arrowUpRight: HiArrowUpRight,
	minus: HiMiniMinus,
	plus: HiMiniPlus,
	Javascript:FaJs,
	NodeJs:FaNodeJs,
	NestJs:SiNestjs,
	postgresSQL:DiPostgresql,
	mongoDB:DiMongodb,
	shopify:FaShopify,
	Java:FaJava,
	AWS:FaAws,
	React:FaReact,
	HTML:FaHtml5,
	CSS:FaCss3,
	linkedin:FaLinkedin,
	email:MdEmail
};