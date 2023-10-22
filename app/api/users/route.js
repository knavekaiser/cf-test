import { createEdgeRouter } from "next-connect";
import { NextResponse } from "next/server";
const router = createEdgeRouter();

const getUsers = async (req, event) => {
  try {
    return new NextResponse(
      JSON.stringify({
        success: true,
        data: [
          { id: 1, name: "Name 1" },
          { id: 2, name: "Name 2" },
          { id: 3, name: "Name 3" },
        ],
      }),
      {
        headers: {
          "Conent-Type": "application/json",
        },
      }
    );
  } catch (err) {
    return responseFn.error({}, err.message);
  }
};

router.get(getUsers);

export async function GET(req, ctx) {
  return router.run(req, ctx);
}

export const runtime = "edge";
