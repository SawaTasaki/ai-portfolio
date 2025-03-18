import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SavedDataProps } from "./props";
import Button from "../components/Button";

const NewTab: React.FC = () => {
  const navigate = useNavigate();
  const [savedData, setSavedData] = useState<SavedDataProps | null>(null);

  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      // JSON 文字列をオブジェクトに変換して保存
      setSavedData(JSON.parse(savedState));
    }
  }, []);

  const handleGoToSetData = () => {
    navigate("/set-data");
  };

  return (
    <div className="p-6 max-h-screen overflow-auto flex flex-col">
      <h1 className="text-2xl font-bold mb-6 text-center">
        マイ AI スタック 📸
      </h1>

      {savedData ? (
        <div className="p-6 overflow-auto flex-1 flex flex-col">
          {/* ユーザー情報表示 */}
          <div className="mb-6 p-4 border rounded-lg bg-gray-100 flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-2xl font-bold">
              {savedData.avatar ? (
                <img
                  src={savedData.avatar}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                "?"
              )}
            </div>
            <div className="text-xl font-semibold">
              {savedData.userName || "ゲスト"}
            </div>
          </div>

          {/* プレート */}
          <div
            className="grid gap-2 p-4 border rounded-lg bg-gray-100 overflow-auto"
            style={{
              gridTemplateColumns: `repeat(${savedData.plateConfig.cols}, 1fr)`,
              gridTemplateRows: `repeat(${savedData.plateConfig.rows}, 1fr)`,
              height: "100vh",
            }}
          >
            {savedData?.plateCards.map((card, index) => (
              <div
                key={`plate-${index}`}
                className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center bg-white"
              >
                {card ? (
                  <div className="w-full h-full bg-white border-2 border-blue-500 rounded flex items-center justify-center cursor-move relative text-2xl font-bold p-2 overflow-hidden">
                    <span className="truncate">
                      {card.tool_name} ({card.company})
                    </span>
                  </div>
                ) : (
                  <span className="text-gray-300">No Card</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg mt-4">
          <h2 className="text-2xl font-bold mb-4">データがまだありません。</h2>
          <p className="mb-4">
            データを既に追加している場合は、設定ページで「ローカルストレージに保存する」を押してください。
          </p>
          <Button
            onClick={handleGoToSetData}
            label="設定ページに移動"
            bgColor="bg-blue-600"
            hoverColor="bg-blue-700"
          />
        </div>
      )}
    </div>
  );
};

export default NewTab;
