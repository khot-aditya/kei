import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from "../../utils/supabase/server";

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { data: todos, error } = await supabase.from('notes').select();

        if (error) throw error;

        return new Response(JSON.stringify(todos), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}