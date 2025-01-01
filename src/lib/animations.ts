import { MousePosition } from '@/types'

export const calculateMousePosition = (e: React.MouseEvent, element: HTMLElement): MousePosition => {
  const rect = element.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

export const mapRange = (value: number, low1: number, high1: number, low2: number, high2: number): number => {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1)
}

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

export const lerp = (start: number, end: number, amt: number): number => {
  return (1 - amt) * start + amt * end
}

export const generateSparkles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random(),
  }))
}