import {
  DetailBase,
  UnitProp,
  generateUnitConfig,
  getMainProps,
  getMirrorProps,
  getWebProps,
} from "../../../../../lib/miragex/unit/common";

const detail = {
  code: "Primitive/Cylinder",
  propsConfig: {
    name: UnitProp.String("Empty"),
    radius: UnitProp.Float(0.5),
    height: UnitProp.Float(2),
    sides: UnitProp.Int(32),
    caps: UnitProp.Boolean(true),
    flatShading: UnitProp.Boolean(false),
  },
  children: "multi",
} as const satisfies DetailBase;

export type MainProps = getMainProps<typeof detail>;
export type MirrorProps = getMirrorProps<typeof detail>;
export type WebProps = getWebProps<typeof detail>;
export const unitConfig = generateUnitConfig(detail);
