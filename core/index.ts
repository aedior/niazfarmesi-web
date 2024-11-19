import { KarjoEnum } from "@/store/user/slice";

export const SERVER_URL = "http://192.168.1.20:8000";

export const SMS_PRICE = 10000;

export const karjo2text = {
  [KarjoEnum.DAROKHANE]: "تکنسین داروخانه",
  [KarjoEnum.ARAYESHI]: "تکنسین آرایشی و بهداشتی",
  [KarjoEnum.SANDOGDAR]: "صندوقدار",
  [KarjoEnum.ANBARDAR]: "انباردار",
  [KarjoEnum.MASOLFANI]: "مسئول فنی",
  [KarjoEnum.GAEMMAGAM]: "قائم مقام",
  [KarjoEnum.KARAMOZ_DARO]: " کارآموز دارویی",
  [KarjoEnum.KARAMOZ_ARAYESHI]: " کارآموز آرایشی و بهداشتی",
};
