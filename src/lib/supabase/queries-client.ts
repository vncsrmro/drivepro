import { createClient } from './client'
import { Instructor, CNHCategory, TransmissionType } from '@/types/types'

// Mapper to convert DB snake_case to Frontend camelCase
function mapInstructor(profile: any, instructor: any): Instructor {
    return {
        id: instructor.id,
        nome: profile.full_name || 'Instrutor',
        email: profile.email || '', // Email might be in auth, often not in public profile unless copied
        telefone: instructor.phone || '',
        foto: profile.avatar_url || 'https://via.placeholder.com/150',
        bio: instructor.bio || '',
        cidade: instructor.city || '',
        estado: instructor.state || '',
        nota: Number(instructor.rating) || 0,
        totalAvaliacoes: instructor.rating_count || 0,
        aulasRealizadas: 0, // Calculated field, maybe sum lessons?
        categoriasHabilitadas: instructor.enabled_categories as CNHCategory[] || [],
        veiculo: {
            id: 'v-' + instructor.id,
            marca: instructor.vehicle_data?.marca || '',
            modelo: instructor.vehicle_data?.modelo || '',
            ano: instructor.vehicle_data?.ano || 2020,
            placa: instructor.vehicle_data?.placa || '',
            transmissao: (instructor.vehicle_data?.transmissao as TransmissionType) || 'manual',
            categoria: (instructor.vehicle_data?.categoria as CNHCategory) || 'B'
        },
        plano: instructor.plan || 'gratis',
        status: instructor.status === 'active' ? 'ativo' : 'pendente',
        precoAula: Number(instructor.hourly_rate) || 0,
        criadoEm: instructor.created_at,
        documentosVerificados: instructor.verified_docs || false
    }
}

export async function getInstructors() {
    const supabase = createClient()

    // We need to join instructors with profiles
    const { data, error } = await supabase
        .from('instructors')
        .select(`
            *,
            profiles (
                full_name,
                avatar_url,
                email
            )
        `)
        .eq('status', 'active')

    if (error) {
        console.error('Error fetching instructors:', error)
        return []
    }

    return data.map((inst: any) => mapInstructor(inst.profiles, inst))
}

export async function getInstructorById(id: string) {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('instructors')
        .select(`
            *,
            profiles (
                full_name,
                avatar_url,
                email
            )
        `)
        .eq('id', id)
        .single()

    if (error) return null

    return mapInstructor(data.profiles, data)
}
