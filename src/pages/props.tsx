export interface PlateConfigProps {
  rows: number;
  cols: number;
}

export interface AiToolProps {
  ai_tool_id: number;
  tool_name: string;
  company: string;
}

export interface SavedDataProps {
  avatar: string | null;
  plateCards: (AiToolProps | null)[];
  plateConfig: PlateConfigProps;
  userName: string;
}
