export type ChipProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export type ChipsProps = {
  chips: Array<ChipItem>;
  selectedId?: string;
  onSelect?: (id: string) => void;
};

export type ChipItem = {
  id: string;
  label: string;
};

export type Ref = HTMLDivElement | null;

export type VisibilityList = Record<string, boolean>;
