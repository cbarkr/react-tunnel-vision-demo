"use client";

import { useState } from "react";
import { TunnelVisionArea } from "@cbarkr/react-tunnel-vision";

export default function Home() {
  const [tunnelVisionSize, setTunnelVisionSize] = useState(50);
  const [tunnelVisionIsEnabled, setTunnelVisionIsEnabled] = useState(true);

  const handleTunnelVisionSize = (newSize: number) => {
    setTunnelVisionSize(newSize);
  };

  const handleTunnelVisionIsEnabled = () => {
    setTunnelVisionIsEnabled(!tunnelVisionIsEnabled);
  };

  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col w-full">
        <div className="bg-black text-white pb-4">
          <div className="flex flex-row justify-center text-2xl pb-4">
            react-tunnel-vision demo
          </div>
          <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col text-center">
              <p>Size</p>
              <div className="border-2 rounded-2xl">
                <button
                  type="button"
                  onClick={() =>
                    handleTunnelVisionSize(
                      tunnelVisionSize > 1 ? tunnelVisionSize - 1 : 0
                    )
                  }
                  className="text-2xl font-bold min-w-[3rem] min-h-[3rem]"
                >
                  -
                </button>
                /
                <input
                  onChange={(e) =>
                    handleTunnelVisionSize(Number.parseInt(e.target.value))
                  }
                  value={tunnelVisionSize}
                  min={0}
                  pattern="[0-9]*"
                  type="text"
                  inputMode="decimal"
                  className="w-12 bg-transparent outline-none text-center text-xl font-bold font-mono"
                ></input>
                /
                <button
                  type="button"
                  onClick={() => handleTunnelVisionSize(tunnelVisionSize + 1)}
                  className="text-2xl font-bold min-w-[3rem] min-h-[3rem]"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <p>Toggle</p>
              <div className="text-2xl border-2 rounded-2xl p-2">
                {!tunnelVisionIsEnabled && (
                  <button
                    type="button"
                    onClick={handleTunnelVisionIsEnabled}
                    className="font-mono"
                  >
                    Enable
                  </button>
                )}
                {tunnelVisionIsEnabled && (
                  <button
                    type="button"
                    onClick={handleTunnelVisionIsEnabled}
                    className="font-mono"
                  >
                    Disable
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 h-full">
          <div className="flex flex-col justify-center align-center text-center">
            <p>Now you see me</p>
          </div>
          <div className="grid w-full">
            <TunnelVisionArea
              size={tunnelVisionSize}
              isEnabled={tunnelVisionIsEnabled}
            >
              <div className="flex flex-col h-full justify-center align-center text-center">
                <p>Now you don't</p>
              </div>
            </TunnelVisionArea>
          </div>
        </div>
      </div>
    </div>
  );
}
