import {
  DetailBase,
  UnitProp,
  generateUnitConfig,
  getMainProps,
  getMirrorProps,
  getWebProps,
} from "../../../../../lib/miragex/unit/common";

const detail = {
  code: "Primitive/Sphere",
  propsConfig: {
    name: UnitProp.String("Empty"),
    radius: UnitProp.Float(0.5),
    segments: UnitProp.Int(32),
    rings: UnitProp.Int(16),
    shading: UnitProp.EnumShading('Smooth'),
    dualSided: UnitProp.Boolean(false),
  },
  children: "multi",
} as const satisfies DetailBase;

export type MainProps = getMainProps<typeof detail>;
export type MirrorProps = getMirrorProps<typeof detail>;
export type WebProps = getWebProps<typeof detail>;
export const unitConfig = generateUnitConfig(detail);
